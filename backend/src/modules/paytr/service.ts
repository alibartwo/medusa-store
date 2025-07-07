import crypto from "crypto";
import { AbstractPaymentProvider } from "@medusajs/framework/utils";
import {
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
  CancelPaymentInput,
  CancelPaymentOutput,
  CapturePaymentInput,
  CapturePaymentOutput,
  DeletePaymentInput,
  DeletePaymentOutput,
  GetPaymentStatusInput,
  GetPaymentStatusOutput,
  InitiatePaymentInput,
  InitiatePaymentOutput,
  Logger,
  ProviderWebhookPayload,
  RefundPaymentInput,
  RefundPaymentOutput,
  RetrievePaymentInput,
  RetrievePaymentOutput,
  UpdatePaymentInput,
  UpdatePaymentOutput,
  WebhookActionResult,
} from "@medusajs/framework/types";
import PayTRClient from "./client";

type Options = {
  apiKey: string;
  merchant_key: string;
  merchant_salt: string;
};

type InjectedDependencies = {
  logger: Logger;
};

class PayTRService extends AbstractPaymentProvider<Options> {
  protected logger_: Logger;
  protected options_: Options;
  // assuming you're initializing a client
  protected client;

  constructor(container: InjectedDependencies, options: Options) {
    super(container, options);

    this.logger_ = container.logger;
    this.options_ = options;

    this.client = new PayTRClient({
      merchant_id: options.apiKey,
      merchant_key: options.merchant_key,
      merchant_salt: options.merchant_salt,
    });
  }
  // ...

  async authorizePayment(
    input: AuthorizePaymentInput
  ): Promise<AuthorizePaymentOutput> {
    const externalId = input.data?.id;

    const paymentData = await this.client.authorizePayment(externalId);

    return {
      data: paymentData,
      status: "authorized",
    };
  }

  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    const externalId = input.data?.id;

    const paymentData = await this.client.cancelPayment(externalId);
    return { data: paymentData };
  }

  async capturePayment(
    input: CapturePaymentInput
  ): Promise<CapturePaymentOutput> {
    const externalId = input.data?.id;

    const newData = await this.client.capturePayment(externalId);
    return {
      data: {
        ...newData,
        id: externalId,
      },
    };
  }

  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    const externalId = input.data?.id;

    await this.client.cancelPayment(externalId);
    return {
      data: input.data,
    };
  }

  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {
    const externalId = input.data?.id;

    const status = await this.client.getStatus(externalId);

    switch (status) {
      case "requires_capture":
        return { status: "authorized" };
      case "success":
        return { status: "captured" };
      case "canceled":
        return { status: "canceled" };
      default:
        return { status: "pending" };
    }
  }

  async getWebhookActionAndData(
    payload: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    const { data } = payload;

    const merchant_oid = String(data.merchant_oid);
    const status = String(data.status);
    const total_amount = String(data.total_amount);
    const hash = String(data.hash);

    this.logger_.info(`Webhook alındı - status: ${status}, oid: ${merchant_oid}, tutar: ${total_amount}`);

    // generate our specific hash
    const generatedHash = crypto
      .createHmac("sha256", this.options_.merchant_key)
      .update(
        `${merchant_oid}${this.options_.merchant_salt}${status}${total_amount}`
      )
      .digest("base64");

    if (generatedHash !== hash) {
      this.logger_.warn(`PayTR webhook doğrulama başarısız: ${merchant_oid}`);
      return {
        action: "failed",
        data: {
          session_id: merchant_oid,
          amount: 0,
        },
      };
    }

    // if success, determine action based on status
    if (status === "success") {
      return {
        action: "captured",
        data: {
          session_id: merchant_oid,
          amount: Number(total_amount) / 100,
        },
      };
    } else {
      return {
        action: "canceled",
        data: {
          session_id: merchant_oid,
          amount: Number(total_amount) / 100,
        },
      };
    }
  }

  async initiatePayment(
    input: InitiatePaymentInput
  ): Promise<InitiatePaymentOutput> {
    const { amount, currency_code, context: customerDetails } = input;

    const response = await this.client.init(
      amount,
      currency_code,
      customerDetails
    );

    return {
      id: response.id,
      data: response,
    };
  }

  async refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput> {
    const externalId = input.data?.id;

    const newData = await this.client.refund(externalId, input.amount);

    return {
      data: input.data,
    };
  }

  async retrievePayment(
    input: RetrievePaymentInput
  ): Promise<RetrievePaymentOutput> {
    const externalId = input.data?.id;

    return await this.client.retrieve(externalId);
  }

  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    const { amount, currency_code, context } = input;
    const externalId = input.data?.id;

    // Validate context.customer
    if (!context || !context.customer) {
      throw new Error("Context must include a valid customer.");
    }

    const response = await this.client.update(externalId, {
      amount,
      currency_code,
      customer: context.customer,
    });

    return response;
  }
}

export default PayTRService;

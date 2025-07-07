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

type Options = {
  apiKey: string;
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

    // TODO initialize your client
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
    const { data, rawData, headers } = payload;

    try {
      switch (data.event_type) {
        case "authorized_amount":
          return {
            action: "authorized",
            data: {
              session_id: (data.metadata as Record<string, any>).session_id,
              amount: new BigNumber(data.amount as number),
            },
          };
        case "success":
          return {
            action: "captured",
            data: {
              session_id: (data.metadata as Record<string, any>).session_id,
              amount: new BigNumber(data.amount as number),
            },
          };
        default:
          return {
            action: "not_supported",
            data: {
              session_id: "",
              amount: new BigNumber(0),
            },
          };
      }
    } catch (e) {
      return {
        action: "failed",
        data: {
          session_id: (data.metadata as Record<string, any>).session_id,
          amount: new BigNumber(data.amount as number),
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

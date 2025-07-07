import axios from "axios";
import crypto from "crypto";

type InitOptions = {
  merchant_id: string;
  merchant_key: string;
  merchant_salt: string;
};

export default class PayTRClient {
  private merchant_id: string;
  private merchant_key: string;
  private merchant_salt: string;

  constructor(options: InitOptions) {
    this.merchant_id = options.merchant_id;
    this.merchant_key = options.merchant_key;
    this.merchant_salt = options.merchant_salt;
  }

  async init(amount: number, currency: string, customer: any) {
    const merchant_oid = "order_" + Date.now();

    const user_ip = customer.ip || "127.0.0.1"; // fallback IP
    const email = customer.email;
    const payment_amount = amount * 100; // PayTR accepts amounts in kuruş

    const basket = Buffer.from(JSON.stringify([
      ["Ürün", amount.toString(), 1],
    ])).toString("base64");

    const hash_str = `${this.merchant_id}${user_ip}${merchant_oid}${email}${payment_amount}${basket}0${this.merchant_salt}`;
    const paytr_token = crypto
      .createHmac("sha256", this.merchant_key)
      .update(hash_str)
      .digest("base64");

    const formData = new URLSearchParams();
    formData.append("merchant_id", this.merchant_id);
    formData.append("user_ip", user_ip);
    formData.append("merchant_oid", merchant_oid);
    formData.append("email", email);
    formData.append("payment_amount", payment_amount.toString());
    formData.append("paytr_token", paytr_token);
    formData.append("user_name", customer.name || "Müşteri");
    formData.append("user_address", customer.address || "Adres");
    formData.append("user_phone", customer.phone || "0000000000");
    formData.append("merchant_ok_url", "https://babyon.com.tr/payment/success");
    formData.append("merchant_fail_url", "https://babyon.com.tr/payment/fail");
    formData.append("timeout_limit", "30");
    formData.append("currency", currency === "TRY" ? "TL" : currency);
    formData.append("test_mode", "1"); // for testing purposes

    const response = await axios.post("https://www.paytr.com/odeme/api/get-token", formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return {
      id: merchant_oid,
      token: response.data.token,
      html: `<iframe src="https://www.paytr.com/odeme/guvenli/${response.data.token}" frameborder="0"></iframe>`,
    };
  }

  async authorizePayment(externalId: string) {
    // todos after callback has come
    return { status: "authorized", id: externalId };
  }

  async refund(externalId: string, amount: number) {
    // return process to paytr api for refund
    return { refunded: true };
  }

  async cancelPayment(externalId: string) {
    // manuel cancelation
    return { canceled: true };
  }

  async getStatus(externalId: string) {
    // there is no status query in PayTR API → it should be track the status locally
    return "success";
  }

  async retrieve(externalId: string) {
    return { id: externalId, status: "success" };
  }

  async update(externalId: string, data: any) {
    return { id: externalId, updated: true };
  }
}
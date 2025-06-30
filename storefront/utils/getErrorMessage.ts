function getErrorMessage(err: unknown, fallback = "Bir hata oluştu"): string {
  return typeof err === "object" && err !== null && "message" in err
    ? ((err as { message?: string }).message ?? fallback)
    : fallback;
}
export default getErrorMessage;
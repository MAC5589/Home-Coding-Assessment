export function getBaseUrl(): string {
  const baseUrl = process.env.PROD_URL;
  if (!baseUrl) {
    throw new Error('PROD_URL environment variable is not set');
  }
  return baseUrl;
}

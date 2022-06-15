export interface FaTenant {
  tenantId: string,
  clientId: string,
  displayName: string,
  siteName: string,
  termsText?: string,
  excludeUrls: string[],
  urls: string[]
}

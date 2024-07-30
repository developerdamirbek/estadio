import { APP_LINK, IS_PROD } from '@/constants'
import { ReqMethods, VERSION } from '@/constants/api'
import { consoleLog } from './console-log'

type FetchParams = {
  apiEndpoint: string
  method?: ReqMethods
  requestData?: BodyInit
  headers?: HeadersInit
  revalidate?: number
  tags?: string[]
}

class ApiRequest {
  defaultRevalidate: number = IS_PROD ? 120 : 60
  reqHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  }

  constructor(public apiLink = '') {}

  async fetch<T>({ apiEndpoint, method, requestData, headers, revalidate, tags }: FetchParams): Promise<T | null> {
    const url = `${this.apiLink}${apiEndpoint}`

    try {
      const response = await fetch(url, {
        method,
        body: requestData,
        headers: {
          ...headers,
          ...this.reqHeaders,
        },
        next: {
          tags,
          revalidate: revalidate || this.defaultRevalidate,
        },
      })

      if (!response.ok) {
        consoleLog('Debug fetch requestData:', requestData)
      }

      const json = await response.json()

      return json as T
    } catch (error: Error | unknown) {
      console.error(error)
    }

    return null
  }
}

export const apiRequest = new ApiRequest(`${APP_LINK}${VERSION}`)

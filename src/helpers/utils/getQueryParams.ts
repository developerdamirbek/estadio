type QueryParamsType<T> = {
  [key in keyof T]: string | number | boolean | null
}

export const getQueryParams = <T>(params: QueryParamsType<T>): string => {
  if (!params) {
    return ''
  }
  const result = Object?.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  return `?${result}`
}

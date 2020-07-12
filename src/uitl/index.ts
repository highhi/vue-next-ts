type FetchError = Error & {
  response: Response
}

export function isFetchError(err: any): err is FetchError {
  return err && err.response
}

const headers = new Headers()
headers.append('content-type', 'application/json; charset=utf-8')
headers.append('accept', 'application/vnd.github.v3+json')

export function gitHubApi<T = any>(url: RequestInfo, options?: RequestInit): Promise<T> {
  const endpoint = new URL(`https://api.github.com${url}`)
  const init = { headers, ...options }
  return fetch(endpoint.href, init).then<T>(res => {
    if (res.ok) return res.json()
    const error = new Error(res.statusText) as FetchError
    error.response = res
    return Promise.reject(error)
  })
}
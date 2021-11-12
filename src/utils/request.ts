import axios, { AxiosRequestConfig } from 'axios'

export interface RequestConfig extends AxiosRequestConfig {
  option?: Option
}

interface Option {
  useErrorHandle?: boolean
  autoErrorHandle?: boolean
  autoLoading?: boolean
}

const DEFAULT_OPTION: Option = {
  useErrorHandle: false,
  autoErrorHandle: false,
  autoLoading: false,
}

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_PARTNER_BACKOFFICE,
  timeout: 30000,
  withCredentials: true, // send cookies when cross-domain requests
})

// Request interceptors
axiosInstance.interceptors.request.use(
  config => {
    const reConfig = config as RequestConfig
    const { option = DEFAULT_OPTION } = reConfig
    reConfig.option = { ...DEFAULT_OPTION, ...option }
    return reConfig
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const config: RequestConfig = error.config
    if (config.option?.useErrorHandle) {
      /*if (error.response.status === 500) {
       alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
       } else */
      if (error.response.data?.errors) {
        return Promise.reject(error.response.data)
      }
      //console.info(...getTag('INV', 'black', 'yellow'), error);
    }
    return Promise.reject(error)
  }
)

function getTag(tagName: string, color: string, bgColor: string): string[] {
  return [
    `%c${tagName}`,
    `color:${color};background-color:${bgColor};border-radius:4px;line-height:1;padding:${
      tagName.length === 3 ? '3px 10px 2px 9px' : '3px 6px 2px'
    }`,
  ]
}

/**
 * front-gateway 에서 PUT, DELETE 메소드 사용을 위해 헤더를 추가해야한다.
 */
function overrideConfig(config: RequestConfig) {
  if (config.method && ['put', 'PUT', 'delete', 'DELETE'].includes(config.method)) {
    config.headers = { ...config.headers, 'wmp-http-method-override': config.method.toUpperCase() }
    config.method = 'post'
  }
  return config
}

function request<T>(config: RequestConfig) {
  return axiosInstance.request<T>(overrideConfig(config)).then(response => response.data)
}

function requestFullResponse<T>(config: RequestConfig) {
  return axiosInstance.request<T>(overrideConfig(config))
}

export { request, requestFullResponse }

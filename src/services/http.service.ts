import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'
import { useAuthStore } from '@/stores/authStore.ts'
import { useNotificationStore } from '@/stores/notificationStore.ts'

class HttpService {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const authStore = useAuthStore()
        if (authStore.token) {
          config.headers.Authorization = `Bearer ${authStore.token}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const notificationStore = useNotificationStore()

        if (error.response) {
          notificationStore.error(
            (error.response.data as { message?: string })?.message || 'Unknown error',
          )

          if (error.response.status === 401) {
            const authStore = useAuthStore()
            authStore.logout()
          }
        }

        return Promise.reject(error)
      },
    )
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T, AxiosResponse<T>>(url, config)
    return response.data
  }

  public async post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T, AxiosResponse<T>, D>(url, data, config)
    return response.data
  }

  public async put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T, AxiosResponse<T>, D>(url, data, config)
    return response.data
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T, AxiosResponse<T>>(url, config)
    return response.data
  }
}

export const httpService = new HttpService()

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const instance = axios.create({
  timeout: 3000,
  withCredentials: true
})

instance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    console.log('axios request interceptor:', config)
    return config
  },
  async (error: Error): Promise<Error> => {
    console.log('axios request interceptor error:', error)
    throw error
    // return error
  }
)

instance.interceptors.response.use(
  async (response: AxiosResponse<any>): Promise<AxiosResponse<any>> => {
    console.log('axios response interceptor:', response)
    return response
  },
  async (error: Error): Promise<Error> => {
    if (isAxiosError(error)) {
      const axiosError: AxiosError = error as AxiosError
      console.log('axios response interceptor axiosError:', axiosError)
    } else {
      console.log('axios response interceptor error:', error)
    }
    throw error
    // return error
  }
)

export const isAxiosError = (error: any): boolean => error.isAxiosError === true

export default instance

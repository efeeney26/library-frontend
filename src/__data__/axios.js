import axios from 'axios'
import { ROUTES } from '../constants'
import { baseUrlInterceptor } from './interceptors'

const axiosInstance = axios.create({
  baseURL: ROUTES.BASE_API_URL_DEV,
  timeout: 5000
})

axiosInstance.interceptors.request.use(baseUrlInterceptor)

export default axiosInstance

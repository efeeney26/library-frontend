import axios from 'axios'
import { ROUTES } from '../constants'
import { baseUrlInterceptor } from './interceptors'

const axiosInstance = axios.create({
  baseURL: ROUTES.API_ENDPOINTS.BASE_URL,
  timeout: 25000
})

axiosInstance.interceptors.request.use(baseUrlInterceptor)

export default axiosInstance

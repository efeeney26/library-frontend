import { ROUTES } from '../../constants'

export const baseUrlInterceptor = (config) => {
  config.baseURL = process.env.NODE_ENV === 'development' ? ROUTES.API_ENDPOINTS.BASE_URL : `${process.env.REACT_APP_BACKEND_URL}/${ROUTES.API_ENDPOINTS.BASE_URL}`
  return config
}

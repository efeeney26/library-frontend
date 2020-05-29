import { ROUTES } from '../../constants'

export const baseUrlInterceptor = (config) => {
  config.baseURL = process.env.NODE_ENV === 'development' ? ROUTES.API_ENDPOINTS.BASE_URL : `${ROUTES.HOST_URL}/${ROUTES.API_ENDPOINTS.BASE_URL}`
  return config
}

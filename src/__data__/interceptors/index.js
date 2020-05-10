import { ROUTES } from '../../constants'

export const baseUrlInterceptor = (config) => {
  config.baseURL = process.env.NODE_ENV === 'development' ? ROUTES.BASE_API_URL : `${ROUTES.HOST_URL}/${ROUTES.BASE_API_URL}`
  return config
}

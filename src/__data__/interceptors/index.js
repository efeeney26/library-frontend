import { ROUTES } from '../../constants'

export const baseUrlInterceptor = (config) => {
  config.baseURL = process.env.NODE_ENV === 'development' ? ROUTES.BASE_API_URL_DEV : ROUTES.BASE_API_URL_PROD
  return config
}

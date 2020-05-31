import axiosInstance from '../axios'
import { ROUTES } from '../../constants'

export default {
  getBooks: () => axiosInstance.get(''),
  getBook: (id) => axiosInstance.get(`/${id}`),
  addBook: (book) => axiosInstance.post(`${ROUTES.API_ENDPOINTS.ADD_URL}`, { book }),
  deleteBook: (id) => axiosInstance.delete('', {
    data: { id }
  }),
  updateBook: (book, id) => axiosInstance.put(`/${id}`, { book })
}

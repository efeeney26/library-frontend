import axiosInstance from '../axios'
import receiveBooks from './receiveBooks'

const fetchBooks = () => (dispacth) => {
  axiosInstance
    .get('')
    .then((res) => {
      dispacth(receiveBooks(res.data.books))
    })
    .catch((err) => console.log('An error occurred.', err))
}

export default fetchBooks

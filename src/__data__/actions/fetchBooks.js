import axiosInstance from '../axios'
import requestBooks from './requestBooks'
import receiveBooks from './receiveBooks'

const fetchBooks = () => (dispacth) => {
  dispacth(requestBooks())
  axiosInstance
    .get('')
    .then((res) => {
      dispacth(receiveBooks(res.data.books))
    })
    .catch((err) => console.log('An error occurred.', err))
}

export default fetchBooks

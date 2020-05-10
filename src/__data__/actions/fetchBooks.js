import axiosInstance from '../axios'
import requestBooks from './requestBooks'
import receiveBooks from './receiveBooks'
import failedRequestBooks from './failedRequstBooks'

const fetchBooks = () => (dispatch) => {
  dispatch(requestBooks())
  axiosInstance
    .get('')
    .then((res) => {
      dispatch(receiveBooks(res.data.books))
    })
    .catch((err) => {
      dispatch(failedRequestBooks())
      console.log('An error occurred.', err)
    })
}

export default fetchBooks

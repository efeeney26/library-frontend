const booksTableScheme = [
  {
    key: 'img',
    type: 'img',
    title: 'Изображение'
  },
  {
    key: 'name',
    type: 'text',
    title: 'Название книги'
  },
  {
    key: 'author',
    type: 'text',
    title: 'Автор книги'
  },
  {
    key: 'genre',
    type: 'text',
    title: 'Жанр книги'
  },
  {
    key: 'description',
    type: 'text',
    title: 'Описание книги'
  },
  {
    key: 'actions',
    type: 'icon',
    action: 'edit',
    icon: 'editIcon',
    color: 'blue'
  },
  {
    key: 'actions',
    type: 'icon',
    action: 'delete',
    icon: 'deleteIcon',
    color: 'red'
  }
]

export default booksTableScheme

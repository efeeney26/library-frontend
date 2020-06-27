const bookScheme = [
  {
    key: 'name',
    title: 'Название книги',
    type: 'text',
    placeholder: 'Введите название книги...',
    validator: 'Данное поле обязательно для заполнения'
  },
  {
    key: 'author',
    title: 'Автор книги',
    type: 'text',
    placeholder: 'Введите автора книги...',
    validator: 'Данное поле обязательно для заполнения'
  },
  {
    key: 'genre',
    title: 'Жанр книги',
    type: 'text',
    placeholder: 'Введите жанр книги...',
    validator: 'Данное поле обязательно для заполнения'
  },
  {
    key: 'description',
    title: 'Описание книги',
    type: 'textarea',
    placeholder: 'Введите описание книги...'
  }
]

export default bookScheme

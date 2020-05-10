import React from 'react'

import AppRouter from './AppRouter'

import style from './App.module.css'

function App () {
  return (
    <div className={style.mainContainer}>
      <h1>Library</h1>
      <AppRouter />
    </div>
  )
}

export default App

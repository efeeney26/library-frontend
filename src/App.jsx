import React from 'react'

import { Header } from './containers'

import AppRouter from './AppRouter'

import style from './App.module.css'

function App () {
  return (
    <>
      <section className={style.header}>
        <Header />
      </section>
      <section className={style.content}>
        <AppRouter />
      </section>
    </>
  )
}

export default App

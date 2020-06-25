import React from 'react'

import { Header, Content } from './containers'

import style from './App.module.css'

function App () {
  return (
    <>
      <section className={style.header}>
        <Header />
      </section>
      <section className={style.content}>
        <Content />
      </section>
    </>
  )
}

export default App

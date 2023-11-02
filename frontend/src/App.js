import React from 'react'
import GlobalStyle from './styles/global.js'
import Header from './components/Header/Header.jsx'
import Resumo from './components/Resumo/Resumo.jsx'
import Form from './components/Form/Form.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Resumo />
      <Form />
      <GlobalStyle />
    </>

  )
}

export default App

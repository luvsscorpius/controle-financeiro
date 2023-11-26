import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global.js'
import Header from './components/Header/Header.jsx'
import Resumo from './components/Resumo/Resumo.jsx'
import Form from './components/Form/Form.jsx'

const App = () => {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
    //Verifica se existe algum dado no localStorage, se sim ele transforma em JSON, caso não ele retorna uma lista vazia
    data ? JSON.parse(data) : []
  )
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // filtrando e pegando as saídas e entradas
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    // Fazendo um reduce para fazer a soma de todas as saídas
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    // Fazendo um reduce para fazer a soma de todas as entradas
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    // Somando o total
    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))
  }

  return (
    <>
      <Header />
      <Resumo income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>

  )
}

export default App

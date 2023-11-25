import React, { useState } from "react";
import * as C from './Styles.jsx'

const Form = ({ handleAdd }) => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    // Gerar ID para cada item
    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!')
            return;
        } else if (amount < 1) {
            alert('O valor precisa ser positivo!')
            return
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.label>Descrição</C.label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.label>Valor</C.label>
                    <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.label htmlFor="rIncome">Entradas</C.label>
                    <C.Input type="radio" id="rExpenses" defaultChecked name="group1" onChange={() => setExpense(!isExpense)} />
                    <C.label htmlFor="rExpenses">Saídas</C.label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>
        </>
    )
}

export default Form
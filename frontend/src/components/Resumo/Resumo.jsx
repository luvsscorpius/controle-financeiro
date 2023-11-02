import React from "react";
import * as C from './Styles.jsx'
import ResumoItem from "../ResumoItem/ResumoItem.jsx";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Resumo = () => {
    return (
        <C.Container>
            <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
            <ResumoItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
            <ResumoItem title="Total" Icon={FaDollarSign} value="1000" />
        </C.Container>
    )
}

export default Resumo
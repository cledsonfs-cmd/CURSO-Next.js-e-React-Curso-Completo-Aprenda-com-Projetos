import { useEffect, useState } from "react"
import { mega } from '../../functions/mega'
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megasena() {
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    },[])

    function renderNumeros() {
        return numeros.map(n => <NumeroDisplay key={n} numero={n} />)
    }
    return (
        <div>
            <div>
                {renderNumeros()}
            </div>

        </div>
    )
}
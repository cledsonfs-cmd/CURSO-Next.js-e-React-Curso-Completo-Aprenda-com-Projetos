import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const [valor, setValor] = useState(0)

    function alteraValor(acao) {
        if (acao === '+') {
            setValor(valor + 1)
        } else {
            setValor(valor - 1)
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={valor} />
            <div>
                <button onClick={() => alteraValor('+')}>+</button>
                <button onClick={() => alteraValor('-')}>-</button>
            </div>
        </div>
    )
}
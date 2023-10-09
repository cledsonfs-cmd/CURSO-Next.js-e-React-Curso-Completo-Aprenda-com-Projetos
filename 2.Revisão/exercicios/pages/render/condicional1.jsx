import If from "../../components/If";
import SomentePar from "../../components/SomentePar";

export default function condicional1() {
    const numero = 5
    return(
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O número {numero} é par</h1>
            </If>
            <If teste={numero % 2 !== 0}>
                <h1>O número {numero} é impar</h1>
            </If>
        </div>
    )
}
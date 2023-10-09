export default function Filho(props) {
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o pai</button>
            <button onClick={() => props.funcao("Passei no ENEM!")}>Falar com o pai</button>
            <button onClick={() => props.funcao("Passei no ENEM!","Uuuu")}>Falar com o pai</button>
            <button onClick={() => props.funcao("Passei no ENEM!","Uuuu",10)}>Falar com o pai</button>
        </div>
    )
}
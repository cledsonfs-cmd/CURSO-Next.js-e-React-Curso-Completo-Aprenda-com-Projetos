export default function jsx4(){
    const subtitulo  = "Estou no javaScript"
    const trechoH3 = <h3>{3 * 3}</h3>
    
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoH3}
            <h2>{Math.max(3, 39)}</h2>
            <h5>{entre(9.6, 1,10)}</h5>
        </div>
    )

    function entre(valor, min, max){
        if(valor>= min && valor<= max){
            return "Sim"
        }else{
            return "Não"
        }
    }
}
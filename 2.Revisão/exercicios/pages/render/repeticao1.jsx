export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    /*function renderLista() {
        const itens = []

        for (let index = 0; index < listaAprovados.length; index++) {
            itens.push(<li key={index}>{listaAprovados[index]}</li>)
            
        }
        
        return itens
    }*/

    // function renderLista() {
    //     return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    // }

    function renderLista() {
        return listaAprovados.map(function(nome, i){
            return <li key={i}>{nome}</li>
        }
        )
    }

    return (
        <ul>
            {(renderLista()) }
        </ul>
    )
}
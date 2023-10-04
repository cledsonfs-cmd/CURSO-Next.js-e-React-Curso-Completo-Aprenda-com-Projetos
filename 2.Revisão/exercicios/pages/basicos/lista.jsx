export default function lista() { 

        return (
            <div>                
                <h2>Lista</h2>
                {gerarLista(10)}
            </div>
        )

        function gerarLista(limit) {          
            const lista = []  
            for (let index = 1; index <= limit; index++) {
                lista.push(<span key={index}>{index},</span>)
            }
            return lista
        }
    
}
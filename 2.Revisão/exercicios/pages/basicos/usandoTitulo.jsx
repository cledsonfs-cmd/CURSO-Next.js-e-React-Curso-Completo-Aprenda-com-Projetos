import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="Página de cadastro" secundario="incluir, alterar, excluir cadastro!" pequeno/>
            <Titulo principal="Página de cadastro" secundario="incluir, alterar, excluir cadastro!" />
        </div>
    )
}
import { useState, useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClieteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setClente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClentes] = useState<Cliente[]>([])


    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClentes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setClente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setClente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}
import { Component } from "react"

export default class Contador extends Component {
    state = {
        numero: this.props.valorInicial ?? 7
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + (this.props.passo ?? 1)
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - (this.props.passo ?? 1)
        })
    }

    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div> 
        )
    }
}
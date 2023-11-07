import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor Cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice) {
    setQuestao(questao.responderCom(indice))    
  }

  function tempoEsgotado() {
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1))    
    }    
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao 
        valor={questao} 
        tempoPraResposta={5}
        respostaFornecida={respostaFornecida} 
        tempoEsgotado={tempoEsgotado}/>
    </div>

  )
}

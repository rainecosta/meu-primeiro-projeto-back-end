const express = require("express")
const router = express.Router()

const app = express()
const porta = 4444

const mulheres = [
      {
        nome: 'Simara Conceicao',
        Imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
      },
      {
        nome: 'Iana Shan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
      },
      {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly3FKpFaz',
        minibio:'Hacker antirracista'

      }
           ]
    


function mostraMulheres(request, response) {
   response.json(mulheres)
}
    

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
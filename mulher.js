const express = require("express")
const router = express.Router()


const app = express()
const porta = 8888

function mostraMulher(request, response) {
 response.json({
    nome:  'Silmara Conceição',
    Imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e Instrutora'
 })
}
 
function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
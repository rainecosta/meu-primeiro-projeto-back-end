const express = require("express")

const app = express()
const porta = 5555

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)
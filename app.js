const express = require('express')
const routerLivros = require('./rotas/livro')
const app = express()
app.use (express.json())
app.use('/livros', routerLivros)
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )
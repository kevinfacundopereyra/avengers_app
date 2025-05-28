import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hola desde la api'))


const PORT = 3000
app.listen(PORT, console.log(`server running on port: http://localhost:${PORT}`))
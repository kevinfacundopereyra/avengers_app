import express from 'express'
import prisma from './prisma/prismaclient.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Hola desde la api'))

app.get('/api/avengers', async (req, res) => {
    try {
      const avengers = await prisma.avengers.findMany({
        include: {
          habilidades: true
        }
      })
      res.json(avengers)
    } catch (error) {
      console.error('Error al obtener los avengers:', error)
      res.status(500).json({ error: 'Error al obtener los avengers' })
    }
  })

  app.post('/api/avengers', async (req, res) => {
    try {
      const { nombre, alias, actor, habilidades } = req.body
  
      const nuevoAvenger = await prisma.avengers.create({
        data: {
          nombre,
          alias,
          actor,
          habilidades: {
            create: habilidades.map((h) => ({
              habilidad: h.habilidad
            }))
          }
        },
        include: {
          habilidades: true
        }
      })
  
      res.status(201).json(nuevoAvenger)
    } catch (error) {
      console.error('Error al crear el avenger:', error)
      res.status(500).json({ error: 'Error al crear el avenger' })
    }
  })


const PORT = 3000
app.listen(PORT, console.log(`server running on port: http://localhost:${PORT}`))
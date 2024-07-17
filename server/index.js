import http from 'http'
import express from 'express'
import cors from 'cors'
import dbConfig from './dbConfig/dbConfig.js'
import dotenv from 'dotenv'
import routers from './routers/routes.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;
app.use(express.json()); // Add this to parse JSON body

app.use(cors())
dbConfig()

app.use('/api', routers)

// app.get('/get-user', (req, res) => {
//     res.send('Hello Worasasasaassald 123')
// })

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server is Listining at PORT: ${PORT}`)
})
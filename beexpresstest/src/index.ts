import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './database/db'

dotenv.config()
const port = process.env.PORT || 8000
const url = process.env.URL!
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectdb(url)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({ path: `./${process.env.NODE_ENV}.env` })

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))



app.listen(process.env.PORT)

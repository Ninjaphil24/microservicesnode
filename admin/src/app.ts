import * as express from 'express'
import * as cors from 'cors'
// import exp = require('constants')

const app = express()

app.use(cors({
    origin: ['http://localhost:4200']
}))

app.use(express.json())

console.log('Listening to port: 8000')
app.listen(port:8000)
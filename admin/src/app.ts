import * as express from 'express'
import {Request,Response} from 'express'
import * as cors from 'cors'
import { createConnection } from 'typeorm'
import {Product} from "./entity/product"

createConnection().then(db=>{
    const prodcutRepository=db.getRepository(Product);
    const app = express()

    app.use(cors({
        origin: ['http://localhost:4200']
    }))

    app.use(express.json())

    app.get('/api/products', async (req: Request, res: Response)=>{
        const products= await prodcutRepository.find()
        res.json(products)
    })

    app.post('/api/products', async (req: Request, res: Response)=>{
        const product= await prodcutRepository.create(req.body)
        const result = await prodcutRepository.save(product)
        return res.send(result)
    }) 

    console.log('Listening to port: 8000')
    app.listen(8000)
})
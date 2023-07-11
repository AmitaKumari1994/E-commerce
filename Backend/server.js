import express from 'express';
import products from './Data/products.js';
import productRoutes from './routes/productRoutes.js'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'

import dotenv from 'dotenv';
dotenv.config()
import  connectDB from './config/db.js'



const port = process.env.PORT || 5000



 connectDB();

const app = express()

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);



app.listen(5000,console.log('server running on port 5000'))
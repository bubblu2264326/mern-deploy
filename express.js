import express from 'express'
import morgan from 'morgan'
import quotes from './routes/routes.js'
import dotenv1 from 'dotenv'
dotenv1.config();
import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//db connection
//mongoose.connect('mongodb://localhost:27017/ecommerece')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://saad:ry3jOjOD6HoHd1nG@cluster0.iaudp.mongodb.net/ecomerece?retryWrites=true&w=majority&appName=Cluster0');
  console.log('data base connectd....');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// API routes
app.use('/products',quotes)

// Serve static files from the public directory
//app.use(express.static('./public'))

// Alternatively, use the path from .env
app.use(express.static(path.resolve('./public/build')))


// For any other request, send React's index.html
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
})
const port=process.env.PORT || 8989;
app.listen(port,()=>{
    console.log('Server is up on localhost:8989');
    
})
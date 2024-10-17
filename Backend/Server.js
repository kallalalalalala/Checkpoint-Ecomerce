import express from 'express';
const app = express();
app.use(express.json());
import dotenv from 'dotenv'
dotenv.config();
import dbconnect from './config/db.js';
import router from './router/route.js';

//router gestion 
app.use('/api/products', router);
const Port =  process.env.Port || 3000;
//server start 
app.listen(Port, () => {
  console.log(`server listening on ${Port}`);
  dbconnect();

});
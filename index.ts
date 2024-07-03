import  cors  from 'cors';
import ExpressServer from "./server/server";
import express from 'express';
import { productRouter } from './server/routes/productRouter';

const HOST: string = process.env.HOST || 'localhost';
const PORT: number = Number(process.env.POR) || 3002;

const server = new ExpressServer(HOST, PORT);

const app = server.getExpress();

app.use(express.json());
app.use(cors());

app.use('/api', productRouter)

try {
  server.listen();
} catch (e) {
  console.log(e);
  process.exit(1);
}
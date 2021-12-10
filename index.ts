import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import TradeDash from './Route/trade-dash/Trade-dash';
import User from './Route/Users/Users';

const app = express()

app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://rafael:F1292320f12@cluster0.vg2rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("user-trade").collection("user");
 
  client.close();
});


app.use(TradeDash)
app.use(User);

app.listen('8080', () => {
    console.log('running in localhost:8080')
})

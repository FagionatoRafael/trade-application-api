import { MongoClient } from "mongodb";
import dotenv, { DotenvParseOutput } from 'dotenv'; 

const result = dotenv.config();

const envs = result.parsed as DotenvParseOutput ;

function Collection() {
    const client = new MongoClient(envs.URL as string);

    client.connect();
    console.log('Connected successfully to server');
    const db = client.db(process.env.DBNAME as string);
    const collection = db.collection(process.env.COLLECTIONNAME as string);
    return collection
}

export default Collection()
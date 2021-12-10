import { MongoClient } from "mongodb";

function Collection() {
    const url = "mongodb+srv://rafael:F1292320f12@cluster0.vg2rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    client.connect();
    console.log('Connected successfully to server');
    const db = client.db('user-trade');
    const collection = db.collection('user');
    return collection
}

export default Collection()
import { ObjectId } from 'mongodb';
import collection from '../connections/config';

const insertCollection = async (body: any) => {
    const insertResult = await collection.insertOne(body);
    return insertResult
    // console.log('Inserted documents =>', insertResult);
}

const findByIdCollection = async (id: any) => {
    const findResult = await collection.find({_id: new ObjectId(id)}).toArray()
    // console.log('Found documents =>', findResult);
    return findResult
}

const findOneCollection = async (body: any) => {
    const findResult = await collection.find(body).toArray()
    // console.log('Found documents =>', findResult);
    return findResult
}

const updateCollection =async (id: any, body:any) => {
    const updateResult = await collection.updateOne({_id: new ObjectId(id)}, { $set: body })
    return updateResult
}

const deleteCollection = async (body: any) => {
    const deleteResult = await collection.deleteOne(body);
    return deleteResult
}

export {insertCollection, findOneCollection, updateCollection,findByIdCollection }
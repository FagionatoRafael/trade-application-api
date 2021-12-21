import { ObjectId } from 'mongodb';
import collection from '../../connections/config';

const insertCollection = async (body: any) => {
    const insertResult = await collection.insertOne(body);
    return insertResult
}

const findByIdCollection = async (id: any) => {
    const findResult = await collection.find({_id: new ObjectId(id)}).toArray()
    return findResult
}

const findOneCollection = async (body: any) => {
    const findResult = await collection.findOne(body)
    return findResult
}

const updateCollection = async (id: any, body:any) => {
    const updateResult = await collection.updateOne({
        _id: new ObjectId(id)}, 
        { 
            $set: {
                valueUSD: body.valueUSD, 
                ValueGBP: body.ValueGBP,         
            },
            $push: {pastTrades: body.pastTrades}
        })
    return updateResult
}

const deleteCollection = async (body: any) => {
    const deleteResult = await collection.deleteOne(body);
    return deleteResult
}

export {insertCollection, findOneCollection, updateCollection,findByIdCollection }
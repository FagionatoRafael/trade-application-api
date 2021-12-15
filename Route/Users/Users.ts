import express from 'express';
import { insertCollection, findOneCollection, updateCollection, findByIdCollection } from '../../controller/User/User.controller';

const app = express()

app.route('/user')
    .get((req, res) => {
        const user = req.query;
        const result = findOneCollection(user)
        result.then((r) => res.json(r))
    })
    .post((req, res) => {
        const user = req.body
        const result = insertCollection(user)
        result.then((r) => res.json(r))
    })
    

app.route('/user/:id')
    .get((req, res) => {
        const id = req.params.id
        const result = findByIdCollection(id)
        result.then((r) => res.json(r))
    })
    .patch((req, res) => {
        const id = req.params.id
        const body = req.body
        const result = updateCollection(id, body)
        result.then((r) => res.json(r))
    })

export default app;
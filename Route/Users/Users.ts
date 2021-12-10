import express from 'express';
import { insertCollection, findOneCollection, updateCollection, findByIdCollection } from '../../controller/User.controller';

const app = express()

app.route('/user')
    .get((req, res) => {
        const user = req.body;
        const result = findOneCollection(user)
        result.then((r) => res.json(r))
        console.log(user)
    })
    .post((req, res) => {
        const user = req.body
        const result = insertCollection(user)
        result.then((r) => res.json(r))
    })
    .put((req, res) => {

    })

app.route('/user/:id')
    .get((req, res) => {
        const id = req.params.id
        const result = findByIdCollection(id)
        result.then((r) => res.json(r))
        console.log(id)
    })

export default app;
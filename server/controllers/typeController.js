const {Type_TS} = require('../models/models')
const ApiError = require('../errors/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type_TS.create({name})
        return res.json(type)

    }
    async getALL(req, res) {
        const types = await Type_TS.findAll()
        return res.json(types)
        
    }
}

module.exports = new TypeController()
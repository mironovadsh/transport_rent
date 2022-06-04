const {Brand_TS} = require('../models/models')
const ApiError = require('../errors/ApiError');
class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand_TS.create({name})
        return res.json(brand)

    }
    async getALL(req, res) {
        const brands = await Brand_TS.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()
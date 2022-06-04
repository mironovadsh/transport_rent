const uuid = require('uuid')
const path = require('path');
const {TS, TS_info} = require('../models/models');

const ApiError = require('../errors/ApiError');

class TSController {
    async create(req, res, next) {
        try{
            let {name, price, territory, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const ts = await TS.create({name, price, territory, brandId, typeId, img: fileName})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => 
                        TS_info.create({
                            tittle: i.tittle,
                            description: i.description,
                            tsId: ts.id
                        })
                    )
            }
            return res.json(ts)

        } catch (e) {
            console.log(e);
            next(ApiError.badRequest(e.message))
        }
        

    }
    async getALL(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit  || 30
        let offset = page * limit - limit 
        let tss; 
        if(!brandId && !typeId) {
            tss = await TS.findAndCountAll({limit, offset})

        }
        if (brandId && !typeId) {
            tss = await TS.findAndCountAll({where:{brandId, limit, offset}})

        }
        if (!brandId && typeId) {
            tss = await TS.findAndCountAll({where:{typeId}, limit, offset})

        }
        if (brandId && typeId) {
            tss = await TS.findAndCountAll({where:{brandId, typeId, limit, offset}})

        }
        return res.json(tss)
    }
    async getOne(req, res) {
        const {id} = req.params
        const ts = await TS.findOne(
            {
                where: {id},
                include: [{model: TS_info, as: 'info'}]
            },

        )
        return res.json(ts)
    }
}

module.exports = new TSController()
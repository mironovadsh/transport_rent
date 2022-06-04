const Router = require('express')
const router = new Router()
const tsRouter = require('./tsRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/ts', tsRouter)




module.exports = router
const Router = require('express')
const router = new Router()
const tsController = require('../controllers/tsController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/',  checkRole('ADMIN'), tsController.create)

router.get('/', tsController.getALL)
router.get('/:id', tsController.getOne)




module.exports = router
const { Router } = require('express')
const { expresionGet } = require('../controllers/expresiones.controller')
const {loguearRequest}=require('../middlewares/utils')

const router = Router()
router.get('',[loguearRequest], expresionGet)
// router.post('', [loguearRequest],usuariosPost)
module.exports = router;
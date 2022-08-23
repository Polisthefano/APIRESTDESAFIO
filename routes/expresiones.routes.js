const { Router } = require("express");
const { body, query } = require("express-validator");
const { loguearRequest } = require("../middlewares/utils");
const validarCampos = require("../middlewares/validar-campos");
const { expresionGetYPost } = require("../controllers/expresiones.controller");
const router = Router();
const expresionesRoutePath = "/expresiones";
router.get(
  expresionesRoutePath,
  [
    loguearRequest,
    query("expresion", "La expresion es requerida").not().isEmpty(),
    validarCampos,
  ],
  expresionGetYPost
);
router.post(
  expresionesRoutePath,
  [
    loguearRequest,
    body("expresion", "La expresion es requerida").not().isEmpty(),
    validarCampos,
  ],
  expresionGetYPost
);
module.exports = router;

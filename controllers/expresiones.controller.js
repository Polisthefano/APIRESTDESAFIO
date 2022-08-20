const { response, request } = require("express");
const { calcularExpresion } = require("../services/expresiones.service");

//Mismo funcion controllador para las dos metodos porque hacen lo mismo
const expresionGetYPost = (req = request, res = response) => {
  const expresion =
    req.method === "GET" ? req.query.expresion : req.body.expresion;
  try {
    const result = calcularExpresion(expresion);
    res.status(200).json({
      resultado: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = { expresionGetYPost };

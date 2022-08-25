const { evaluate } = require("mathjs");
/** Funcion que resuelve la expresion matematica */
const calcularExpresion = (expresion) => {
  try {
    return evaluate(expresion);
  } catch (error) {
    throw new Error("Error al calcular, la expresión no es valida");
  }
};

module.exports = { calcularExpresion };

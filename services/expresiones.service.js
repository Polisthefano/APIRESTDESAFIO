const { evaluate } = require('mathjs')

const calcularExpresion=(expresion)=>{
    try{
       return evaluate(expresion)}
    catch(error){
        throw new Error("Error al calcular la expresion, "+ error)
    } 
}

module.exports={calcularExpresion}
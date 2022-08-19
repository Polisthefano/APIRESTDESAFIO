const { response, request } = require('express') //al importar esto y poner res=response y req=request hace que vscode 
    //me sugiera .status .send etc
const expresionGet = (req = request, res = response) => {
    const expresion=req.query
    console.log(expresion);
    res.status(200).json({ 
        msg: 'get API',
       expresion
    })
}
// const expresionPost = (req, res = response) => {
//     const {nombre,edad}=req.body 
//     res.status(200).json( 
//         {nombre,edad}
//     )
// }

module.exports = { expresionGet, }
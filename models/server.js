const express = require('express')
const cors = require('cors')
class Server { //server orientado a objetos

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.RoutePath = '/api/expresiones'
            //middlewares
        this.middlewares();
        //rutas
        this.routes()
    }

    middlewares() {
        this.app.use(cors())

        this.app.use(express.json())
           
        this.app.use(express.static('public')) 
           
    }

    routes() {
        this.app.use(this.RoutePath, require('../routes/expresiones.routes')) 
    }
    listen() {
        this.app.listen(this.port)
    }
}
module.exports = Server;
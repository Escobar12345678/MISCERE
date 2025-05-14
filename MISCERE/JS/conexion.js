let conectar = require ("mysql");

let conexion = conectar.createConnection({
    host: 'localhost',
    database:'tienda_online',
    user: 'root',
    password: ""
});

conexion.connect(function(error){
    if(error){
        throw error;
    } else{
        console.log("conexión exitosa");
    }
});
module.exports = conexion;


const express = require('express');
const link = require("../JS/link");
const router = express.Router();
const conexion = require("../JS/conexion");
const bcrypt = require('bcrypt');
const session = require('express-session');

router.post("/codLogin", function(req,res){
    const mai = req.body.loginEmail;
    const pas = req.body.loginPassword;

    //Vlidar si el correo existe
    const validar = "SELECT * FROM usuario WHERE Correo= ? ";
    conexion.query(validar,[mai],async function(error, rows) {
        let mensaje;
        if (error){
            console.log("Error en la consulta para validar el correo", error);
            return res.status(500).send("error en el servidor");
        }        
        if(rows.length < 1){
            mensaje = "El correo ingresado no existe";
            res.render("index",{mensaje,link});
        }else{
            //Vlidar password
            const user = rows[0];
            const match = await bcrypt.compare(pas, user.Password);

            if (!match){
                mensaje = "Contraseña incorrecta";
                res.render("index",{mensaje,link});
            }else{
                req.session.login = true;
                req.session.user = {
                  id: user.idUsuario,
                  nombre: user.Nombre,
                  apellido: user.Apellido,
                  correo: user.Correo,
                  telefono: user.Telefono
                };
                
                
                console.log(req.session); //comproar datos
                res.render("inicio",{datos: req.session, link});

            }
        }
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const conexion = require("../JS/conexion");
const link = require("../JS/link");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/regUsuario", async function(req,res){

    let name = req.body.nombre;
    let ape = req.body.apellido;
    let emai = req.body.registerEmail;
    let pref = req.body.phonePrefix;
    let cel = req.body.phoneNumber;
    let pass = req.body.registerPassword;
    let rpass = req.body.registerPasswordConfirm;
    let remem = req.body.recordarme;

    try {
        const hashedPas = await bcrypt.hash(pass,saltRounds);
        
        const insertar = "INSERT INTO usuario (Nombre, Apellido, Correo, Telefono, Password) VALUES (?, ?, ?, ?, ?)";
        conexion.query(insertar, [name, ape, emai, pref + cel, hashedPas], function(err) {
                

            if (err) {
                console.error("Error al intentar registrar usuario:", err); // 👈 Imprime el error detallado
                return res.status(500).send("Error al registrar usuario");
            }
            else{
                console.log("Registro exitoso");
                let mensaje = "Registro existos, ya puedes iniciar sesión";
                
                res.render("principal", { name: name }); 
            }
        })


    } catch (error) {
        console.error("Error al registrar",error)
        res.status(500).send("Error en el servidor");
    }
    
});

module.exports = router;
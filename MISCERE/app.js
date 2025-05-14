//IMPORTAR LIBRERÍAS
const express = require ("express");
const session = require("express-session");
const app = express();

//CONFIGURACIONES
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Manejo de sesiones
app.use (session({
    secret:"tu_contraseña",
    resave: false,
    saveUninitialized: false
}));
//Fin manejo de sesión


//Rutas dinámincas y estáticas
app.use(require("./Routes/index"));
app.use(express.static("public"));
app.use(require("./Routes/regUsuario"));
app.use(require("./Routes/codLogin"));
app.use(require("./Routes/inicio"));
app.use(require("./Routes/hogar_cocina"));
app.use(require("./Routes/camas"));
app.use(require("./Routes/iphone"));
app.use(require("./Routes/perfil"));
app.use(require("./Routes/metodos-pago"));
app.use(require("./Routes/principal"));

//Configuración del puerto
const PORT  = process.env.PORT || 3000;
app.listen(PORT,function(){
    if(PORT == 3000){
        console.log("http://localhost:3000");
    }else{
        console.log(PORT);
    }
})
let express = require('express')
const path= require("path")
let app = express();
app.use(express.static("public"))
app.listen(process.env.PORT || 3030,()=> console.log("esto fue exitoso en el puerto 3030") )
// ruta raiz
/* app.get("/", function(req,res){
    res.send ("hola como estan")
}) */

// ruta raiz enviando un archivo al navegador

app.get("/index", (req,res)=>{
    let html= path.resolve(__dirname,'./views/index.html')
    res.sendFile(html)
})
app.get("/", (req,res)=>{
    let html= path.resolve(__dirname,'./views/index.html')
    res.sendFile(html)
})
app.get("/register", (req,res)=>{
    let html= path.resolve(__dirname,'./views/register.html')
    res.sendFile(html)
})
app.get("/login", (req,res)=>{
    let html= path.resolve(__dirname,'./views/login.html')
    res.sendFile(html)
})


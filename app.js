let express = require('express')
const path= require("path")
let app = express();
app.use(express.static("public"))

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log("running on port 4001"));


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


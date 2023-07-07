const express = require("express")
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host : "localhost",
    user: "root",
    password: "cpn#@2020",
    database: "lista_tarefas"
})

app.use(cors());
app.use(express.json());

app.post("/", (req, res) =>{
    const { text } = req.body;
    const { category } = req.body;
    const { isCompleted } = req.body;

    console.log("text");
})

app.get("/register", (req, res, aFazer) => {
    // let sql = "INSERT INTO APP ( id, text, category, isCompleted ) VALUES ( 'TESTE3','TESTANDO3','0')";
    let sql = "INSERT INTO APP ( text, category, isCompleted ) VALUES ?"
    // let categoria = document.selectElementById('categoria_bd')
    // console.log(categoria)
    let values = [['TESTE3','TESTANDO3','0'],]
    // let values = [[aFazer.text, aFazer.categoria, aFazer.isCompleted],]

    db.query(sql, [values], (err, result) => {
        if(err){
            console.log(err)
        }else{
            console.log("Formulário enviado!")
            console.log(result)
        }
    })
})

app.listen(5173, ()=>{
    console.log("Rodando servidor!")
})
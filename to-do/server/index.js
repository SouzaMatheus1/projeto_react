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

app.post("/register", (req, res) =>{
    const { text } = req.body;
    const { category } = req.body;
    const { isCompleted } = req.body;

    console.log(text);
})

app.get("/", (req, res) =>{
    let sql = "INSERT INTO APP ( id, text, category, isCompleted ) VALUES ( '2','TESTE2','TESTANDO2',0 )";

    db.query(sql, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, ()=>{
    console.log("Rodando servidor!")
})
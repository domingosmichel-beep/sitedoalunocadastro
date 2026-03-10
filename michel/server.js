const express = require ('express');
const mysql = require('mysql12');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//criar conexão com o banco 
const conexao = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'escola3'
    }
);

//Criar rota para salvar aluto
app.post("/salvar", (req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

    let sql = "INSERT INTO alunos (nome, idade) VALUES "
    conexao.query (sql, [nome, idade], (erro, resultado) => { if (erro) {  
        console.log(erro); 
    } else {

      res.send("aluno salvo com sucesso") } 
    }); 
});
    
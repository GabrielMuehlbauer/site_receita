// server.js
const express = require("express");
const mysql = require("mysql2/promise"); // Usamos a versão com "promise"
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json()); // Habilita o servidor a ler JSON
app.use(cors()); // Permite acesso de qualquer origem (seu HTML)

// Configuração da conexão com o Banco de Dados
const dbConfig = {
    host: 'localhost', // Ou o IP do seu servidor MySQL
    user: 'root',      // Seu usuário
    password: '',  // Sua senha
    database: 'quasetudogostoso'
};

// --- Rota para Cadastrar Usuário ---
app.post("/cadastrar-usuario", async (req, res) => {
    try {
        const { nome, email, data_nascimento, cep, genero, senha } = req.body;

        // 1. TRATAR OS DADOS (Resolver Mismatches)
        // CEP: Remover o traço
        const cepTratado = cep.replace('-', '');

        // Gênero: Mapear de texto para número (TINYINT)
        let generoTratado;
        if (genero === "Masculino") generoTratado = 1;
        else if (genero === "Feminino") generoTratado = 2;
        else generoTratado = 3; // "Outro"

        // 2. SEGURANÇA (Resolver Senha + Salt)
        // Gerar o Salt
        const salt = await bcrypt.genSalt(10);
        // Gerar o Hash da senha
        const hashSenha = await bcrypt.hash(senha, salt);

        // 3. EXECUTAR O SQL
        const connection = await mysql.createConnection(dbConfig);
        const sql = `INSERT INTO usuario (nome, email, data_nascimento, cep, genero, senha, salt)
                     VALUES (?, ?, ?, ?, ?, ?, ?)`;

        // Os valores devem estar na mesma ordem do SQL
        const values = [nome, email, data_nascimento, cepTratado, generoTratado, hashSenha, salt];

        await connection.execute(sql, values);
        await connection.end();

        // 4. Retornar Sucesso
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });

    } catch (error) {
        console.error("Erro no cadastro de usuário:", error);
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
});

// --- Rota para Cadastrar Categoria ---
app.post("/cadastrar-categoria", async (req, res) => {
    try {
        const { nome_categoria } = req.body; // 'nome_categoria' virá do JS

        const connection = await mysql.createConnection(dbConfig);
        const sql = "INSERT INTO categoria (categoria) VALUES (?)";
        await connection.execute(sql, [nome_categoria]);
        await connection.end();

        res.status(201).json({ message: "Categoria cadastrada com sucesso!" });

    } catch (error) {
        console.error("Erro no cadastro de categoria:", error);
        res.status(500).json({ message: "Erro ao cadastrar categoria." });
    }
});

// --- Rota para Cadastrar Refeição ---
app.post("/cadastrar-refeicao", async (req, res) => {
    try {
        const { nome_refeicao } = req.body; // 'nome_refeicao' virá do JS

        const connection = await mysql.createConnection(dbConfig);
        const sql = "INSERT INTO refeicao (refeicao) VALUES (?)";
        await connection.execute(sql, [nome_refeicao]);
        await connection.end();

        res.status(201).json({ message: "Refeição cadastrada com sucesso!" });

    } catch (error) {
        console.error("Erro no cadastro de refeição:", error);
        res.status(500).json({ message: "Erro ao cadastrar refeição." });
    }
});


// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}. Acesse http://localhost:${PORT}`);
});
const express = require('express');
const app = express();

//indica para express que usaremos os dados em json
app.use(express.json());

let usuarios = [
    {nome: "Rogério", sobrenome: "Mendes"}
];

//http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send("Alô Alô, Graças a Deus!");
})

//http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    //console.log(request)
    return response.json(usuarios);
})

app.post("/usuarios", (request, response) => {
    const { nome, sobrenome } = request.body;

    usuarios.push({ nome, sobrenome });

    return response.json({ nome, sobrenome });
})

//http://localhost:3000/usuarios/Rogério
app.put("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;

    const { sobrenome } = request.body;
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})
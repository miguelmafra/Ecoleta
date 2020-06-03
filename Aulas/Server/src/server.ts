import express, { request, response } from 'express';

const app = express();


// Rota: Endereço completo da requisição (exemplo localhost:3333/users)
// Recurso: Qual entidade estamos acessando do sistema (exemplo /users)

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Deletar uma informação do back-end

//request Param : Parametro que vem na própria rota que identificam um recurso
const users = [
    'Miguel',
    'Lucas',
    'Alex',
    'Daniel'
];

//lista todos os usuários do array
app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    return response.json(users);
});

//lista um usuário especifico conforme o ID procurado
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

//cria um usuário
app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    };

    return response.json(user);
});

app.listen(3333);
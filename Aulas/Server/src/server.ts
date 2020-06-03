import express, { request, response } from 'express';

const app = express();

app.use(express.json());
// Rota: Endereço completo da requisição (exemplo localhost:3333/users)
// Recurso: Qual entidade estamos acessando do sistema (exemplo /users)

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Deletar uma informação do back-end

//request Param : Parametro que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações 


//SQl tradicional: SELECT * FROM users WHERE name = 'Diego'
//Com Knex: knex('users).where('name', 'Diego).select ('*')

const users = [
    'Miguel',
    'Lucas',
    'Alex',
    'Daniel'
];

//lista todos os usuários do array
app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(users => users.includes(search)) : users;

    return response.json(filteredUsers);
});

//lista um usuário especifico conforme o ID procurado
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

//cria um usuário
app.post('/users', (request, response) => {

    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);
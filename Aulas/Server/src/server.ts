import express, { request, response } from 'express';

const app = express();


// Rota: Endereço completo da requisição (exemplo localhost:3333/users)
// Recurso: Qual entidade estamos acessando do sistema (exemplo /users)

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Deletar uma informação do back-end

app.get('/users', (request,response) => {
    console.log('Listagem de Usuários');

    response.json([
        'Miguel',
        'Lucas',
        'Alex',
        'Daniel'
    ]);
})

app.post('/users', (request,response) => {
    const user ={
        name: 'Diego',
        email: 'diego@rocketseat.com.br'
    }

     return response.json(user);
})

app.listen(3333);
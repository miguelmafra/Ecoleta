import express, { request, response } from 'express';
import routes from './routes';
import path from "path";

const app = express();

app.use(express.json());
app.use(routes);

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

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))


app.listen(3333);
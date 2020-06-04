import express, { request, response } from 'express';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

//index: listagem
//show: exibir um único registro
//create: cadastro
//update: atualizar
//delete: deletar

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index );

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);



export default routes;
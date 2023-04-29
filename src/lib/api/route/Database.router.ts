import express, { Express } from 'express';
import { connectToDatabase, retrieveAllDatabase, disconnectDatabase } from '../controller/Database.controller';

const DatabaseRouter: Express = express();

DatabaseRouter.post('/db-connect', connectToDatabase);
DatabaseRouter.get('/databases', retrieveAllDatabase);
DatabaseRouter.get('/disconnect', disconnectDatabase);

export default DatabaseRouter;

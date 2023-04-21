import express, { Express, Request, Response } from 'express';
import { connectToDatabase, retrieveAllDatabase } from '../controller/Database.controller';

const DatabaseRouter: Express = express();

DatabaseRouter.post('/db-connect', connectToDatabase);
DatabaseRouter.get('/databases', retrieveAllDatabase);

export default DatabaseRouter;

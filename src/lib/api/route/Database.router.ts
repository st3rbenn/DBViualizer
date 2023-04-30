import express, { Express } from 'express';
import { connectToDatabase, retrieveAllDatabase, disconnectDatabase, getTablesFromDatabase, getServersInformations } from '../controller/Database.controller';

const DatabaseRouter: Express = express();

DatabaseRouter.post('/connect', connectToDatabase);
DatabaseRouter.get('/server-informations', getServersInformations);
DatabaseRouter.get('/databases', retrieveAllDatabase);
DatabaseRouter.get('/tables/:database', getTablesFromDatabase);
DatabaseRouter.get('/disconnect', disconnectDatabase);

export default DatabaseRouter;

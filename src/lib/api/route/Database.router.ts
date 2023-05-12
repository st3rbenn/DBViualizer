import express, { Express } from 'express';
import { connectToDatabase, retrieveAllDatabase, disconnectDatabase, getTablesFromDatabase, getServersInformations, useDatabase } from '../controller/Database.controller';

const DatabaseRouter: Express = express();

DatabaseRouter.post('/connect', connectToDatabase);
DatabaseRouter.get('/server-informations', getServersInformations);
DatabaseRouter.get('/all', retrieveAllDatabase);
DatabaseRouter.get('/tables/:database', getTablesFromDatabase);
DatabaseRouter.get('/use/:database', useDatabase)
DatabaseRouter.get('/disconnect', disconnectDatabase);

export default DatabaseRouter;

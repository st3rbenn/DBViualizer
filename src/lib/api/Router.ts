import express, { Express, Request, Response } from 'express';
import DatabaseRouter from './route/Database.router';

const Router: Express = express();

Router.use('/DB', DatabaseRouter);

export default Router;

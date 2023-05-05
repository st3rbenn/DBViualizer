import express, { Express, Request, Response } from 'express';
import DatabaseRouter from './route/Database.router';

const Router: Express = express();

Router.use('/database', DatabaseRouter);

export default Router;

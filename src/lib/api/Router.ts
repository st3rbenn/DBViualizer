import express, { Express, Request, Response } from 'express';
import DatabaseRouter from './route/Database.router';
import HealthRouter from './route/Health.router';

const Router: Express = express();

Router.use('/database', DatabaseRouter);
Router.use('/health', HealthRouter);

export default Router;

import express, { Express } from "express";

import { getHealth } from "../controller/Health.controller";

const HealthRouter: Express = express();

HealthRouter.get("/", getHealth);

export default HealthRouter;
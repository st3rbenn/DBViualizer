import express, { Express } from 'express';

import { _Blank } from '../controller/_Blank.controller';

const _BlankRouter: Express = express();

_BlankRouter.get('/', _Blank);

export default _BlankRouter;

import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from '../routes/routes';
import userRouter from '../routes/userRoutes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../../frontend/public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

export default app;

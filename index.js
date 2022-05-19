import dotenv from 'dotenv';
import express from 'express';
// import moviesRouter from './src/movies';
// import genresRouter from './src/genres';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
//import upcomingsRouter from './src/movies';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';
import expressLogging from 'express-logging';
import logger from 'logops';

dotenv.config();
db.init();

const app = express();

const port = process.env.PORT;
const dependencies = buildDependencies();
console.log("App started!");
app.use(errorHandler);
app.use(express.json());
app.use(errorHandler);
app.use(expressLogging(logger));
// app.use('/api/movies', moviesRouter);
// app.use('/api/genres', genresRouter);
// app.use('/api/upcomings', upcomingsRouter);
app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/movies', createMoviesRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
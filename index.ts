import express, { Express } from "express";
import dotenv from "dotenv";
import moment from "moment";  // format lại thời gian

import clientRoutes from './routes/client/index.route';

dotenv.config();

const app: Express = express(); 
const port: number | string = process.env.PORT || 3000;

// folder public
app.use(express.static("public"));

// cài pug
app.set('views', "./views");
app.set('view engine', 'pug');

// app local variables
app.locals.moment = moment;

// client Routes
clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
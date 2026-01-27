/*imports*/
import express from "express";
import 'dotenv/config';
import * as Sentry from '@sentry/node';
import './instrument.mjs';

//routes
import bookingRouter from './routes/bookings.js';
import hostRouter from './routes/hosts.js';
import loginRouter from './routes/login.js';
import propRouter from './routes/properties.js';
import reviewRouter from './routes/reviews.js';
import userRouter from './routes/users.js';
//handlers (middleware)
import errorHandler from './handlers/errorHandler.js';
import logHandler from './handlers/logHandler.js';
/* end imports */

const app = express();

/*using*/
app.use(express.json());
app.use(logHandler);
/*end using*/

/*routes*/
app.use('/bookings', bookingRouter);
app.use('/hosts', hostRouter);
app.use('/login', loginRouter);
app.use('/properties', propRouter);
app.use('/reviews', reviewRouter);
app.use('/users', userRouter);
/*end routes*/

app.get("/", (req, res) => {
  const msg = 'Welcome to the express bookings API.Endpoints are: '
    + '\n\t- /bookings'
    + '\n\t- /hosts'
    + '\n\t- /properties'
    + '\n\t- /reviews'
    + '\n\t- /users'
    + '\n\npermission tokens can be acquired by posting in to /login with the following format:'
    + '\n\t\t{"username":"<your_username>", "password:"<your_password>"}'

  res.send(msg);
});

/*error logging and handling*/
app.use(Sentry.Handlers.errorHandler);
app.use(Sentry.Handlers.tracingHandler);
app.use(errorHandler);
/* end error logging and handling*/

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

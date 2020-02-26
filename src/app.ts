import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// initializations
const app = express();

//passport
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

//routes
import authRoutes from './routes/auth.routes';
import privateRoutes from './routes/private.routes';

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(express.json());

//initialize of passport
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get('/', (req, res) => {
  res.send(`THE API is at https://127.0.0.1:${app.get('port')}`);
  
});

app.use(authRoutes);
app.use(privateRoutes);

export default app;

import cookieParser from 'cookie-parser';
import express from 'express';
import authRoutes from './module/auth/auth.routes.js';
import errHandler from './common/middleware/err.middleware.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//custom middleware
app.use('/api/auth', authRoutes);


// errhandler routes
app.use(errHandler);


export default app;
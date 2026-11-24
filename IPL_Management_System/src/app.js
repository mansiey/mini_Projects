import cookieParser from 'cookie-parser';
import express from 'express';
import authRoutes from './module/auth/auth.routes.js';
import errHandler from './common/middleware/err.middleware.js';
import ownerRoutes from './module/ipl_mng/owner/owner.routes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


//register auth routes
app.use('/api/auth', authRoutes);


//register owner routes
app.use('/api/owner', ownerRoutes);


// errhandler routes
app.use(errHandler);


export default app;
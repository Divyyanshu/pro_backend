import express from 'express'
import {login}  from '../controller/userControllers.js'


const userRoutes = express.Router();

userRoutes.post('/login' , login);

export default userRoutes;
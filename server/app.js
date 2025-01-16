import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import User from './models/userModel.js';
import generateToken from './utils/jwt.js';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connection is successfull');
});

app.use('/auth' , userRoutes)

console.log(generateToken())

async function addUser(){
    await User.deleteMany()
   await User.create([{userName: "divyanshu tailor" , email : "dtailor1881@gmail.com" , password : '123456789' ,phoneNumber : 9414441576}])
}
 
addUser()



app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT}`);
});

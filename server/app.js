import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import User from './models/userModel.js';
import generateToken from './utils/jwt.js';

const app = express();

dotenv.config();
// middleware for parse data
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connection is successfull');
});

app.use('/auth', userRoutes)

console.log(generateToken())

async function addUser() {
  await User.deleteMany()
  await User.create([{ userName: "divyanshu tailor", email: "dtailor1881@gmail.com", password: 'div123456789', phoneNumber: 9414441576 },
  { userName: "Mayank tailor", email: "tailormayank@gmail.com", password: 'mayank123456789', phoneNumber: 8955962240 },
  { userName: "Manish kumar tailor", email: "manishKumar@gmail.com", password: 'manish@1881', phoneNumber: 9361865476 },
  { userName: "utsav singh rathore", email: "utsav@gmail.com", password: 'utsavsingh@1881', phoneNumber: 936100076 }])
  console.log("created data succesfully")
}

addUser()



app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT}`);
});

import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  
});

const User = mongoose.model('user', userSchema);

export default User;



// model >> controller >> routes >>> app {MCRA}
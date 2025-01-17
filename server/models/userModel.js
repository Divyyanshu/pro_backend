import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require : true
  },
  email: {
    type: String,
    require : true
  },
  password: {
    type: String,
    require : true
  },
  phoneNumber: {
    type: Number,
    require : true
  },
  
});

const User = mongoose.model('user', userSchema);

export default User;



// model >> controller >> routes >>> app {MCRA}
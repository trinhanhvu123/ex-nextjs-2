// import mongoose from 'mongoose'

// const connectDB = () => {
//     if(mongoose.connections[0].readyState){
//         console.log('Already connected.')
//         return;
//     }
//     mongoose.connect(process.env.MONGODB_URL, {
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, err => {
//         if(err) throw err;
//         console.log('Connected to mongodb.')
//     })
// }

const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb+srv://anhvu6288:oRd1S2UX0bc6iYOn@cluster0.eigpmsx.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority';

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports = connectDB;

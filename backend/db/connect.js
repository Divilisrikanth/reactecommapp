const mongoose = require('mongoose');

const connection =async (url)=>{
  try {
    await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
}
module.exports= connection;
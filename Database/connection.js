const mongoose = require('mongoose')
const connnectionString = process.env.DATABASE

mongoose.connect(connnectionString).then(()=>{
    console.log("MongoDB atlas Succesfully connected with Nike Server");
}).catch((err)=>{
    console.log(`MongoDb connection failed : ${err}`);
})
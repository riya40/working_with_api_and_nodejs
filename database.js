const mongoose = require('mongoose')

async function connect(){
    try{
    await mongoose.connect('mongodb+srv://priyanunna20:Azzgif2YKmaMUtdb@cluster0.lxuh1mf.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
    }catch(error){
        throw new Error('Error connecting to mongoDB')
    }
}
module.exports={connect};
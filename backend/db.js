const mongoose = require('mongoose');
const { Await } = require('react-router-dom');
const mongoURL= 'mongodb://shivamkumar08765:shivam@ac-hiqunoz-shard-00-00.3gaepw8.mongodb.net:27017,ac-hiqunoz-shard-00-01.3gaepw8.mongodb.net:27017,ac-hiqunoz-shard-00-02.3gaepw8.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-fpu3mr-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB=async () =>{
  await mongoose.connect(mongoURL, { useNewUrlParser: true} ,async(err, result)=>{
    
    if(err) console.log("---", err)
    else{
        console.log("connected");
        const fetched_data= await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log(data);
        })
    }
});
}

module.exports=mongoDB;
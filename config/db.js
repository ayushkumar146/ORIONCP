const mongoose=require("mongoose");

connectDB=async()=>{
    try{
   const conn =await mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    })
    console.log("mongodb connected");
    }
    catch (error){
          console.log(error);
    }
}

module.exports=connectDB;
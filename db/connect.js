const mongoose=require('mongoose')

// const connectionString='mongodb+srv://subhash:1234@nodeexpressproject.3cc4a.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB=(url)=>{
    return mongoose.connect(url,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
    })

}

module.exports=connectDB;

       
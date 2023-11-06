import mongoose from "mongoose";
const URI="mongodb+srv://priya:priya@cluster0.kvjkwxx.mongodb.net/oyo"
const connectDB= async()=>{

    await mongoose.connect(URI,
        {useNewUrlParser:true,
        useUnifiedTopology:true,}
    )
    console.log("DB Connected....")
}
export default connectDB;
import mongoose from "mongoose";

const dbConfig = async ( ) =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error is in DB Config File" , error)
    }
}

export default dbConfig
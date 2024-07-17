import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type:String
    },
    fathername: {
        type:String
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
}, {timestamp : true})

const UserModel = mongoose.model('users', userSchema)
export default UserModel
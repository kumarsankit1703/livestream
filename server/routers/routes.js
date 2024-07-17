import express from "express";
import { Createuser, DeleteAllUser, DeleteUser, getSingleUser, GetUser, UpdateUser } from "../controller/userController.js";

const routers = express.Router()

routers.post('/create', Createuser) 
routers.get('/users' , GetUser) 
routers.get('/users/:id' , getSingleUser) 
routers.delete('/delete/:id' , DeleteUser) 
routers.put('/update/:id' , UpdateUser) 
routers.delete('/delete-all', DeleteAllUser)

export default routers
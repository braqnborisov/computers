import {Router} from "express";
import {getNames, getUser, createUser, getProduct} from "./userController";
export const userRoutes = Router();

userRoutes.get("/users", getUser);
userRoutes.get("/products", getProduct);
userRoutes.get("/names", getNames);
userRoutes.post("/users", createUser);
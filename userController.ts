import {Response, Request} from "express";
import {UserModel} from "./userModel";
import {CreateUserInput} from "./createUserInput";

export const getUser = async (request: Request, response: Response) => {
    let user = await new UserModel().getUser()
    response.send(user)
    console.log(user)
}

export const getNames = async (request: Request, response: Response) => {
    let user = await new UserModel().getUser()
    response.send(user)
    console.log(user)
}

export const getProduct = async (request: Request, response: Response) => {
    let product = await new UserModel().getProduct()
    response.send(product)
    console.log(product)
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const createUserInput: CreateUserInput = req.body;
        const userModel = new UserModel();
        await userModel.createUser(createUserInput);
        res.send({
            message: "Success"
        })
    } catch (e) {
        res.status(403).send({
            message: "User create is not successful"
        })
    }
}
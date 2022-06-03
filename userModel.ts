import {CreateUserInput} from "./createUserInput";
const mysql = require('mysql2');

export type User = {
    id: number,
    username: string,
    password: string,
    email: string,
    age: number,
}

export type Product = {
    id: number,
    name: string,
    model: string,
    price: string,
}

export class UserModel {
    private conn;
    constructor() {
        const pool = mysql.createPool({host: 'localhost', user: 'root', database: 'computers'});
        this.conn = pool.promise();
    }

    async getUser(): Promise<User[]>{
        const [rows] = await this.conn.query("SELECT * FROM users");
        return rows;
    }

    async getNames(): Promise<User[]> {
        const [rows] = await this.conn.query("SELECT * FROM users");
        return rows;
    }

    async getProduct(): Promise<Product[]>{
        const [rows] = await this.conn.query("SELECT * FROM products");
        return rows;
    }

    async createUser(createUserInput: CreateUserInput): Promise<boolean> {
        let sql = "INSERT INTO users (username, password, email, age) VALUES (?, ?, ?, ?)";
        let values = [
            createUserInput.username,
            createUserInput.password,
            createUserInput.email,
            createUserInput.age
        ];
        sql = mysql.format(sql, values);

        await this.conn.execute(sql);
        return true;
    }
}

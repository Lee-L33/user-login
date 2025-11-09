import 'reflect-metadata';
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

export const AppdataSource = new DataSource({
    type: 'mongodb',
    url: process.env.DB_URL,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,  // ❗ควรปิดใน production
    logging: false,
    authSource: 'admin',  // ✅ สำคัญเมื่อใช้ username/password
    entities: [
        // ใส่ entities ของคุณเช่น:
        // User,
        // Product,
    ],
});

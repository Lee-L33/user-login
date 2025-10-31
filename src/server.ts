import express from 'express';
import dotenv from 'dotenv';
import { AppdataSource } from './database/db';
dotenv.config();

const startServer = async () => {
    const app = express();
    const PORT = Number(process.env.PORT);

    app.use(express.json());

    AppdataSource.initialize()
    .then(() => {
        console.log("hello world");

        const server = app.listen(PORT, () => {
            console.log(`Serveris running on http://localhost:${PORT}`);
        });
        server.on('error', (err: Error) => {
            console.log('Failed to start server:', err);
        })
    })
    .catch((err) => {
        console.log("Database connection failed:", err);
    });
};

startServer();

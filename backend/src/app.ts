import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { app } from './socket';

class App {
  private express: Application;

  constructor(app: Application) {
    this.express = app;
  }

  configs() {
    this.express.use(express.json());
    this.express.use(cookieParser());
    this.express.use(
      express.static(path.join(__dirname, '..', '..', 'frontend', 'dist')),
    );
    this.express.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: 'GET,PUT,POST,OPTIONS,DELETE',
      }),
    );
    this.express.get('*', (req: Request, res: Response) => {
      res.sendFile(
        path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'),
      );
    });
  }

  start() {
    this.configs();
    return this.express;
  }
}

const server = new App(app).start();
export default server;

import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
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
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: 'GET,PUT,POST,OPTIONS,DELETE',
      }),
    );
  }

  start() {
    this.configs();
    return this.express;
  }
}

const server = new App(app).start();
export default server;

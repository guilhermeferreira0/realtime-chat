import express from 'express';
import cors from 'cors';

class App {
  private readonly express = express();

  configs() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(
      cors({
        origin: 'http://localhost:3000/',
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

export const app = new App().start();

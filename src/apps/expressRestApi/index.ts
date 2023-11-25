import * as express from 'express';
import { Application, Router } from 'express';
import authRouter from './auth/views';
import { App } from '../share/app';
import { authenticateUserMiddleware } from './auth/middlewares';

export class ExpressRestApi implements App{
    private readonly app;
    private readonly port : number;

    constructor(port : number){
        this.app = express();
        this.port = parseInt(process.env.PORT || "8000");
    }

    get express(){
        return this.app;
    }

    public close(){
        this.app.close()
    }

    private configurate(){
        this.registerMiddleware(authenticateUserMiddleware)
        this.registerMiddleware(express.json());
        this.registerRoute('/auth', authRouter)
    }

    private registerMiddleware(middleware : any){
        this.app.use(middleware)
    }

    private registerRoute(path : string, route: Router){
        this.app.use(path, route)
    }

    public get router(){
        return this.app.router
    }

    public run() {
        this.configurate();
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        })
        this.app.listen(this.port, () => {
            console.log(`Server is Fire at http://localhost:${this.port}`);
        });     
    }
}
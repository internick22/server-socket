import express from 'express';
import { SERVER_PORT } from '../global/environment';
import http from 'http';

export default class Server {

    public app: express.Application;
    public port: number; 
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server( this.app );
    }

    

    start(call: Function) {
        this.httpServer.listen( this.port, ()=> {
            console.log(`Example app listening at PORT: ${this.port}`); 
        });
    }

}
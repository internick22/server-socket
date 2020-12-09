import Server from "./classes/server";
import { SERVER_PORT } from './global/environment';
import router from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = Server.instance;

//body-perser
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

//cors
server.app.use( cors({ origin:true, credentials:true }));

//rutas de la aplicacion
server.app.use('/', router);

server.start( () => {
    console.log(`servidor corriendo en el puerto ${ SERVER_PORT}`);
}); 



import express from "express";
import { config } from './helpers'

const app = express();

app.use(express.json())

// define a route handler for the default home page
app.get( "/", (req: any, res: { send: (arg0: string) => void; }) => {
    // renders 'OK' if project is working fine on default route
    res.send( "OK" );
});

// start the express server
app.listen( config.port, () => {
    console.log( `Server started at http://localhost:${ config.port }` );
});
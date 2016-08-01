import * as echo from "./controllers/echo";

export function setRoutes(server) {
    //ECHO route - respond with whatever was passed in the path
        server.get('/echo/:message', echo.get);
        console.log('set routes...');
    }
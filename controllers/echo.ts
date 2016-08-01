//ECHO controller - respond with the parameters passed in
import * as restify from "restify";

export function get(req: restify.Request, res: restify.Response, next: restify.Next) {
        res.send(req.params);
        next();
    };
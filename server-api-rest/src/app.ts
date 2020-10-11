import express, { json, urlencoded, Request, Response, NextFunction } from 'express';
import createError from "http-errors";
import cors from "cors";
import path from 'path';

import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import logger from "morgan";

import { ItemsResolver } from "./resolvers/itemResolver";
import { ItemsRoute, ItemsIDRoute } from "./routes/productsRoute";

export async function startServer() {

    // CONFIG SERVER
    const app = express();
    app.set('port', process.env.PORT || 4000);
    app.use(json());
    app.use(urlencoded({ extended: false }));

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');


    // CONFIG MIDDLEWARE
    app.use(logger('dev'));
    app.use(cors());


    app.use('/api', [ItemsRoute, ItemsIDRoute]);

    // CONFIG GRAPHQL
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ItemsResolver]
        }),
        context: ({ req, res }) => ({ req, res }),
    });

    server.applyMiddleware({ app, path: '/api' });

    // catch 404 y forward
    app.use((__, _, next) => {
        next(createError(404));
    });

    // error handler
    app.use((err: any, req: Request, res: Response, _: NextFunction) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render error page
        res.status(err.status || 500);
        res.render('error');
    });

    return app;
}

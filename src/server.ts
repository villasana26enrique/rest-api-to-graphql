import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';

const app = express();

app.use('*', cors());

app.use(compression());

const servidor = new ApolloServer({
    schema,
    introspection: true
});

servidor.applyMiddleware({app});
app.get('/', expressPlayground({
    endpoint: '/graphql'
}));

app.get('/', (req, res) => {
    res.send('API Academia Online en GraphQL');
});

const PORT = 5300;

const httpServer = createServer(app);
app.listen(
    { port : PORT },
    () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}`)
);
import { dataSources } from './data/index';
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
    introspection: true,
    dataSources: () => ({
        seasons: new dataSources.SeasonsData(),
        races: new dataSources.RacesData(),
        drivers: new dataSources.DriversData(),
        circuits: new dataSources.CircuitsData()
    })
});

servidor.applyMiddleware({app});
app.get('/', expressPlayground({
    endpoint: '/graphql'
}));

app.get('/', (req, res) => {
    res.send('Rest API to GraphQL');
});

const PORT = 5300;

const httpServer = createServer(app);
app.listen(
    { port : PORT },
    () => console.log(`API GraphQL http://localhost:${PORT}`)
);
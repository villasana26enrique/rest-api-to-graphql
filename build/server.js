"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./data/index");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
app.use('*', cors_1.default());
app.use(compression_1.default());
const servidor = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    introspection: true,
    dataSources: () => ({
        seasons: new index_1.dataSources.SeasonsData(),
        races: new index_1.dataSources.RacesData(),
        drivers: new index_1.dataSources.DriversData(),
        circuits: new index_1.dataSources.CircuitsData()
    })
});
servidor.applyMiddleware({ app });
app.use('/', graphql_playground_middleware_express_1.default({
    endpoint: '/graphql'
}));
app.get('/', graphql_playground_middleware_express_1.default({
    endpoint: '/graphql'
}));
app.get('/', (req, res) => {
    res.send('Rest API to GraphQL');
});
const PORT = 5300;
const httpServer = http_1.createServer(app);
app.listen({ port: PORT }, () => console.log(`API GraphQL http://localhost:${PORT}`));

import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        holaMundo(): string {
            return "Hola Mundo";
        }
    }
};

export default query;
import { IResolvers } from "graphql-tools";
import { getWikipediaUrlMobile } from '../lib/utils';

const type : IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaUrlMobile(parent.url)
    }
};

export default type;
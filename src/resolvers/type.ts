import { IResolvers } from "graphql-tools";
import { getWikipediaUrlMobile } from '../lib/utils';

const type : IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaUrlMobile(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaUrlMobile(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaUrlMobile(parent.url)
    },
    Location: {
        lng: parent => parent.long
    }
};

export default type;
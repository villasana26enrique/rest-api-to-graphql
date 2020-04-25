import { IResolvers } from "graphql-tools";
import { getWikipediaUrlMobile, getAge } from '../lib/utils';

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
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => `${parent.givenName} ${parent.familyName}`,
        urlMobile: parent => getWikipediaUrlMobile(parent.url),
        age: parent => getAge(parent.dateOfBirth)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaUrlMobile(parent.url)
    }
};

export default type;
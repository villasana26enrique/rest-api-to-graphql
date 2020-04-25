import { dataSources } from './../data/index';
import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        async seasonList(_: void, __:any, { dataSources } ) {
            return await dataSources.seasons.getSeasons().then(
                (data:any) => data.MRData.SeasonTable.Seasons
            );
        },
        /*En este caso si se pasa el segundo parametro de la función,
        ya que "year" se esta enviando desde el Schema, como parametro*/
        async racesByYear(_: void, { year }, { dataSources } ) {
            return await dataSources.races.getRaces( year ).then(
                (data:any) => data.MRData.RaceTable.Races
            );
        },
        async selectRace(_: void, { year, round }, { dataSources } ) {
            return await dataSources.races.getRaceByYear( year, round ).then(
                (data:any) => data.MRData.RaceTable.Races[0]
            );
        },
        async listOfDrivers(_: void, { pageElements, page }, { dataSources } ) {
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversBySeason(_:void, { year, race }, { dataSources } ) {
            return await dataSources.drivers.getDriversBySeason(year, race).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverInformation(_:void, { id }, { dataSources } ) {
            return await dataSources.drivers.getDriverInformation(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            );
        },
        async driversStandingBySeason(_:void, { year }, { dataSources } ) {
            return await dataSources.drivers.getDriversStanding(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async listOfCircuits(_: void, { pageElements, page }, { dataSources } ) {
            return await dataSources.circuits.getCircuits(pageElements, page).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            );
        },
        async selectCircuit(_:void, { id }, { dataSources } ) {
            return await dataSources.circuits.getCircuitById(id).then(
                (data: any) => data.MRData.CircuitTable.Circuits[0]
            );
        }
    }
};

export default query;
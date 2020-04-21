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
        }
    }
};

export default query;
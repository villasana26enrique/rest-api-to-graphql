import { F1 } from './data-source';

export class DriversData extends F1 {
    constructor(){
        super();
    }

    async getDrivers(pageElements:number = -1, page:number = 1) {
        if (pageElements === -1) {
            return await this.get("drivers.json?limit=1000",{
                cacheOptions: { ttl: 60 }
            });
        }

        const offset = (page - 1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${ limit }&offset=${ offset }`;

        return await this.get(`drivers.json?${ filter }`,{
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriversBySeason(year: string, race?: number) {
        if (!race) {
            return await this.get(`${year}/drivers.json`, {
                cacheOptions: { ttl: 60 }
            });
        }
        return await this.get(`${year}/${race}/drivers.json`, {
            cacheOptions: { ttl: 60 }
        });  
    }

    async getDriverInformation(id: string) {
        return await this.get(`drivers/${ id }.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}
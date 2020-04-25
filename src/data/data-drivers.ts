import { F1 } from './data-source';

export class DriversData extends F1 {
    constructor(){
        super();
    }

    async getDrivers(){
        return await this.get("drivers.json",{
            cacheOptions: { ttl: 60 }
        });
    }
}
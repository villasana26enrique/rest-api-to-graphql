import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';

export class RacesData extends F1 {
    constructor(){
        super();
    }

    async getRaces(year: string){
        year = checkYear( year );
        return await this.get(`${year}.json`,{
            cacheOptions: { ttl: 60 }
        });
    }

    async getRaceByYear(year: string, round: number){
        year = checkYear( year );
        round = roundCheck( round );
        return await this.get(`${year}/${round}.json`,{
            cacheOptions: { ttl: 60 }
        });
    }
}
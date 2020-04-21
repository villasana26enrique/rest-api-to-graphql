import { F1 } from './data-source';

export class RacesData extends F1 {
    constructor(){
        super();
    }

    async getRaces(year: String){
        const currentYear = new Date().getFullYear();
        /*Se Coloca el + antes de la variable, ya que "year" es un String y la estamos
        comparando con numeros.*/
        if ( isNaN(+year) || +year < 1950 || +year > currentYear) {
            year = String(currentYear);
        }
        return await this.get(`${year}.json`,{
            cacheOptions: { ttl: 60 }
        });
    }
}
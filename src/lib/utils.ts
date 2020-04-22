export function getWikipediaUrlMobile(url:string) : string {
    return (url !== undefined) ? url.replace("wikipedia","m.wikipedia") : "";
}

export function checkYear(year: string): string {
    const currentYear = new Date().getFullYear();
    /*Se Coloca el + antes de la variable, ya que "year" es un String y la estamos
    comparando con numeros.*/
    if ( isNaN(+year) || +year < 1950 || +year > currentYear) {
        return String(currentYear);
    }

    return year;
}

export function roundCheck(round: number){
    if (round >= 100) {
        round = 1;
    }
    return round;
}
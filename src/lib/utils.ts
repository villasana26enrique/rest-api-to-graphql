export function getWikipediaUrlMobile(url:string) : string {
    return (url !== undefined) ? url.replace("wikipedia","m.wikipedia") : "";
}
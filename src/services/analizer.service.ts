import { Http } from "../plugins/http.plugin";

export class Analizer{
    public constructor(
        private urlToAnalize:string
    ){}

    public getUrls():Promise<RegExpMatchArray>{
        return this.getUrlContent()
        .then(result => {
            if(result === null)
                throw new Error("Error when matching");

            return this.findUrlsInText(result)
        })
        .catch(e => e);
    }

    private async getUrlContent():Promise<string>{
        return Http.getContentOf(this.urlToAnalize);
    }

    private findUrlsInText(text:string):Set<string>{
        return new Set<string>(
            text.match(
                new RegExp(`https?:\/\/(?:www\.)?(?:[a-zA-Z0-9-]+\.)?${Http.getDomainOfUrl(this.urlToAnalize)}\.([a-zA-Z]{2,})(\/[^"\s]*)?`, "gm")
            )
        );
    }
}
import { Log } from "./log.service";

export class Fuzzer
{
    public constructor(
        private urlToFuzzing:string,
        private dictionaryPath:string[],
        private keyToReplace:string,

        private log:Log
    ){}

    public async start():Promise<string[]>
    {
        const resultsOfFuzzing:string[] = [];
        let resultOfValidation:boolean = false;

        let urlModifiedToFuzzing:string = "";

        for(const path of this.dictionaryPath)
        {
            urlModifiedToFuzzing = this.urlToFuzzing.replace(this.keyToReplace, path); 

            this.log.write(`${urlModifiedToFuzzing} `);

            resultOfValidation = await this.validateConnectionWithUrl(
                urlModifiedToFuzzing
            );

            if (resultOfValidation)
            {
                resultsOfFuzzing.push(urlModifiedToFuzzing);
                this.log.write(`${urlModifiedToFuzzing} found succesfully`);
            }
            else
            {
                this.log.write(`${urlModifiedToFuzzing} NOT found`);
            }
        }

        return resultsOfFuzzing;
    }

    private async validateConnectionWithUrl(urlToFuzzing:string):Promise<boolean>
    {
        const response = await fetch(urlToFuzzing)
        return response.status === 200;
    }
};
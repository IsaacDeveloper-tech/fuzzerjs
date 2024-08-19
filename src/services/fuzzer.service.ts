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
        let counterOfFound:number = 0;

        for(const path of this.dictionaryPath)
        {
            urlModifiedToFuzzing = this.urlToFuzzing.replace(this.keyToReplace, path); 

            this.log.write(`Analizing ${urlModifiedToFuzzing} ... \n`);

            resultOfValidation = await this.validateConnectionWithUrl(
                urlModifiedToFuzzing
            );

            if (resultOfValidation)
            {
                counterOfFound++;
                resultsOfFuzzing.push(urlModifiedToFuzzing);
                this.log.write(`${urlModifiedToFuzzing} found succesfully \n`);
            }
            else
            {
                this.log.write(`${urlModifiedToFuzzing} NOT found \n`);
            }
        }

        this.log.write(`Paths found: ${counterOfFound}`);

        return resultsOfFuzzing;
    }

    private async validateConnectionWithUrl(urlToFuzzing:string):Promise<boolean>
    {
        const response = await fetch(urlToFuzzing)
        return response.status === 200;
    }
};
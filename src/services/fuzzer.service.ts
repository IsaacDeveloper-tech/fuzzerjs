import { Log } from "./log.service";
import { File } from "./file.service";

export class Fuzzer
{
    public constructor(
        private urlToFuzzing:string,
        private dictionaryPath:string[],
        private keyToReplace:string,

        private file:File,
        private log:Log
    ){}

    public async start():Promise<void>
    {
        let resultOfValidation:boolean = false;
        let urlModifiedToFuzzing:string = "";
        let counterOfFound:number = 0;

        for(const path of this.dictionaryPath)
        {
            urlModifiedToFuzzing = this.urlToFuzzing.replace(this.keyToReplace, this.deleteUnwantedChar(path)); 

            this.log.write(`Analizing ${urlModifiedToFuzzing} ... \n`);

            resultOfValidation = await this.validateConnectionWithUrl(
                urlModifiedToFuzzing
            );

            if (resultOfValidation)
            {
                counterOfFound++;
                this.file.saveValue(`${urlModifiedToFuzzing}\n`);
                this.log.write(`${urlModifiedToFuzzing} found succesfully \n`);
            }
            else
            {
                this.log.write(`${urlModifiedToFuzzing} NOT found \n`);
            }
        }

        this.log.write(`Paths found: ${counterOfFound}`);
        this.file.closeFile();
    }

    private async validateConnectionWithUrl(urlToFuzzing:string):Promise<boolean>
    {
        const response: Response | null = await fetch(urlToFuzzing)
        .catch((error) => {
            return null;
        });

        return (response !== null && response.status === 200);
    }

    private deleteUnwantedChar(text:string):string
    {
        let newText:string = "";

        if((text.includes("\n") || text.includes("\r")))
        {
            newText = text.replace("\n", "");
            newText = newText.replace("\r", "");
        }

        return newText;
    }
};
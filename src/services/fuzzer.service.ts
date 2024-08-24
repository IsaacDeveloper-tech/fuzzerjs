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
            urlModifiedToFuzzing = this.replaceKeyWord(path);
            this.log.write(`Analizing ${urlModifiedToFuzzing} ... \n`);

            resultOfValidation = await this.validateConnectionWithUrl(
                urlModifiedToFuzzing
            );

            if(resultOfValidation) counterOfFound++;
        }

        this.log.write(`Paths found: ${counterOfFound}`);
        this.file.closeFile();
    }

    private replaceKeyWord(valueToReplaceKey:string):string
    {
        return this.urlToFuzzing.replace(this.keyToReplace, this.deleteUnwantedChar(valueToReplaceKey)); 
    }

    private async validateConnectionWithUrl(urlToFuzzing:string):Promise<boolean>
    {
        let resultOfValidation:boolean = false;

        const response: Response | null = await fetch(urlToFuzzing)
        .catch((error) => {
            return null;
        });

        resultOfValidation = (response !== null && response.status === 200);

        if (resultOfValidation)
        {
            this.file.saveValue(`${urlToFuzzing}\n`);
            this.log.write(`${urlToFuzzing} found succesfully \n`);
        }
        else
        {
            this.log.write(`${urlToFuzzing} NOT found \n`);
        }

        return resultOfValidation;
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
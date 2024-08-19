import { readFile } from "fs";
import path from "path";
import { Log } from "./log.service";

export class Dictionary
{
    public constructor(
        private pathOfDictionary:string,
        private keyForSplit:string,

        private log:Log
    ){}

    public getDictionary():string[]
    {
        let allData:string[] = [];

        this.log.write(`Reading dictionary from: ${this.pathOfDictionary}`);

        readFile(path.join(__dirname, this.pathOfDictionary), "utf-8", (error, data) => {
            if(error !== null)
                this.log.write(`Error reading this path: ${this.pathOfDictionary}`);

            allData = data.split(this.keyForSplit);
        });

        this.log.write(`Readed dictionary from: ${this.pathOfDictionary}`);

        return allData;
    }
}
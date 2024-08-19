import { readFileSync } from "fs";
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
        let data:string;
        let allData:string[] = [];

        this.log.write(`Reading dictionary from: ${this.pathOfDictionary}`);

        data = readFileSync(this.pathOfDictionary, "utf-8");

        allData = data.split(this.keyForSplit);

        return allData;
    }
}
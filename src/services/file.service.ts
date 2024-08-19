import { writeSync, openSync, closeSync } from "fs";

export class File
{
    private nameOutputFile:string;
    private file:number;

    public constructor(ouputFile:string)
    {
        this.nameOutputFile = ouputFile;
        this.file = this.createFile();
    }

    private createFile():number
    {
        return openSync(this.nameOutputFile, "a");
    }

    public saveValue(value:string):void
    {
        writeSync(this.file, value, 0, "utf-8");
    }

    public closeFile():void
    {
        closeSync(this.file);
    }
}
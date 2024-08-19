export class Log
{
    public constructor (
        private verbose:boolean
    ){}

    public write(text:string):void
    {
        if (this.verbose)
            console.log(text);
    }
}
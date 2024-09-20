import https from "node:https";

export namespace Http{
    
    export function getContentOf(url:string):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            https.get(url, (response) => {
                let result:string = "";

                if(response.statusCode === undefined || response.statusCode > 399){
                    reject("Incorrect conexion");
                    throw new Error("Incorrect conexion");
                }
    
                response.setEncoding("utf-8");
                response.on("data", data => {
                    result += data;
                });
                response.on("end", () => {
                    resolve(result);
                })
            });
        });
    }

    export function getDomainOfUrl(url:string):string{
        return url.split(".").at(1) ?? "";
    }
}
import { Fuzzer } from "../../src/services/fuzzer.service";
import { Log } from "../../src/services/log.service";
import { File } from "../../src/services/file.service";

describe("Test of Fuzzer", () => {
    /**
     * 1.test de creación del objeto
     * 2.test validación correcta de url
     * 3.test de validación incorrecta de url
     * 4.test de eliminación de caracteres no deseados
     * 5. ¿Test de start? si es que si creo que toca refactorizar
     */
    
    // For file
    const pathOfOutput:string = "./output";

    // For log
    const isVerbose:boolean = true;

    // For Fuzzer
    const urlToFuzzingPath:string = "https://google.com/FUZZ";
    const urlToFuzzingSubDomain:string = "https://FUZZ.google.com/";
    const keyToReplace:string = "FUZZ";
    const dictionaryPath:string[] = [
        "/home",
        "/robots.txt",
        "/helloworld"
    ];
    const dictionarySubDomain:string[] = [
        "app",
        "drive",
        "helloworld"
    ];


    const file:File = new File(pathOfOutput);
    const log:Log = new Log(!isVerbose);

    test("Creating a Fuzzer", () => {
        const fuzzer:Fuzzer = new Fuzzer(
            urlToFuzzingPath,
            dictionaryPath,
            keyToReplace,
            file,
            log
        );

        expect(fuzzer).toBeInstanceOf(Fuzzer);
    });

    test("Validation and replacement URL", async () => {
        const fuzzer:Fuzzer = new Fuzzer(
            urlToFuzzingPath,
            dictionaryPath,
            keyToReplace,
            file,
            log
        );

        let urlModified:string = "";
        let validationResult:boolean = false;


        urlModified = fuzzer["replaceKeyWord"](dictionaryPath[0]);
        validationResult = await fuzzer["validateConnectionWithUrl"](urlModified);

        expect(urlModified).toBe("https://google.com/home");
        expect(validationResult).toBeTruthy();
    });
    
});
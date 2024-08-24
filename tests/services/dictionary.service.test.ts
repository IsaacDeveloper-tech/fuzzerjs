import { Dictionary } from "../../src/services/dictionary.service";
import { Log } from "../../src/services/log.service";
import fs from "fs";

describe("Test of dictionary class", () => {
    const log:Log = new Log(false);

    const pathOfDictionary:string = "dict.txt";
    const keyForSplit:string = "\n";

    const pathOfDictionaryIncorrect:string = "dictIncorrect.txt";
    const keyForSplitIncorrect:string = ".";

    test("Creating dictionary class", () => {
        const dictionary:Dictionary = new Dictionary(
            pathOfDictionary,
            keyForSplit,
            log
        );

        expect(dictionary).toBeInstanceOf(Dictionary);
    });

    test("Get dictionary with correct key for split and path", () => {
        const dictionary:Dictionary = new Dictionary(
            pathOfDictionary,
            keyForSplit,
            log
        );

        expect(dictionary.getDictionary().length > 0).toBe(true);
    });

    test("Get dictionary with INCORRECT key for split", () => {
        const dictionary:Dictionary = new Dictionary(
            pathOfDictionary,
            keyForSplitIncorrect,
            log
        );

        expect(dictionary.getDictionary().length === 0).toBe(true);
    });

    test("Get dictionary with INCORRECT path", () => {
        const dictionary:Dictionary = new Dictionary(
            pathOfDictionaryIncorrect,
            keyForSplit,
            log
        );

        expect(dictionary.getDictionary().length === 0).toBe(true);
    });

    beforeAll(() => {
        if(fs.existsSync(pathOfDictionary)) fs.rmSync(pathOfDictionary);
        createTemporalDictionary(pathOfDictionary);
    });

    afterAll(() => {
        if(fs.existsSync(pathOfDictionary)) fs.rmSync(pathOfDictionary);
    });
});

function createTemporalDictionary(path:string):void
{
    const dictionaryContent:string = `hello`;

    const file:number = fs.openSync(path, "a");
    fs.writeSync(file, dictionaryContent);
    fs.closeSync(file);
}

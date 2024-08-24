import { File } from "../../src/services/file.service";
import fs from "fs";

describe("Tests of file service", () => {
    let fileSystem:File;
    const filePath:string = "prueba.txt";
    const valueToSave:string = "value";
    
    test("Creating file", () => {
        fileSystem = new File(filePath);
        expect(fileSystem).toBeInstanceOf(File);
        expect(fs.existsSync(filePath)).toBe(true);
    })
    
    test("Saving value in file", () => {
        expect(fs.readFileSync(filePath).toString()).toBe("");
        fileSystem.saveValue(valueToSave);
        expect(fs.readFileSync(filePath).toString()).toBe(valueToSave);
    })
    
    // TODO: How to manage the error to program don't crash
   test("Closing file", () => {
        fileSystem.closeFile();
        
        expect(()=>{
            fileSystem.saveValue(valueToSave);
        }).toThrow("EBADF: bad file descriptor, write");
    })

    beforeAll(() => {
        if(fs.existsSync(filePath)) fs.rmSync(filePath);
    });

    afterAll(() => {
        if(fs.existsSync(filePath)) fs.rmSync(filePath);
    });
})
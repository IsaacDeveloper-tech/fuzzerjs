import { Log } from "../../src/services/log.service";

describe("Tests of log", () => {
    const verbose:boolean = true;
    const message:string = "hello";

    test("Test log with verbose", () => {
        const log:Log = new Log(verbose);
        const result = jest.spyOn(console, "log");

        log.write(message);

        expect(result).toHaveBeenCalledWith(message);
        result.mockRestore();
    });

    test("Test log WITHOUT verbose", () => {
        const log:Log = new Log(!verbose);
        const result = jest.spyOn(console, "log");

        log.write(message);

        expect(result).toHaveBeenCalledTimes(0);
        result.mockRestore();
    });
});
import { args } from "./plugins/args.plugin";
import { Fuzzer } from "./services/fuzzer.service";
import { Log } from "./services/log.service";
import { Dictionary } from "./services/dictionary.service";
import { File } from "./services/file.service";

function main():void
{
    const header:string = `
                                                                                         
@@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@             @@@   @@@@@@   
@@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@            @@@  @@@@@@@   
@@!       @@!  @@@       @@!       @@!  @@!       @@!  @@@            @@!  !@@       
!@!       !@!  @!@      !@!       !@!   !@!       !@!  @!@            !@!  !@!       
@!!!:!    @!@  !@!     @!!       @!!    @!!!:!    @!@!!@!             !!@  !!@@!!    
!!!!!:    !@!  !!!    !!!       !!!     !!!!!:    !!@!@!              !!!   !!@!!!   
!!:       !!:  !!!   !!:       !!:      !!:       !!: :!!             !!:       !:!  
:!:       :!:  !:!  :!:       :!:       :!:       :!:  !:!  :!:  !!:  :!:      !:!   
 ::       ::::: ::   :: ::::   :: ::::   :: ::::  ::   :::  :::  ::: : ::  :::: ::   
 :         : :  :   : :: : :  : :: : :  : :: ::    :   : :  :::   : :::    :: : :
    `;

    console.log(header);

    const log:Log = new Log(args.verbose);
    const dictionary:Dictionary = new Dictionary(
        args.dictionary,
        args.keySplit,
        log
    );

    const file:File = new File(args.output);
    
    const fuzzer:Fuzzer = new Fuzzer(
        args.link,
        dictionary.getDictionary(),
        args.keyFuzz,
        file,
        log
    );

    fuzzer.start();
}

main();
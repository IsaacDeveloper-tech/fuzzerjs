import { args } from "./plugins/args.plugin";
import { Fuzzer } from "./services/fuzzer.service";
import { Log } from "./services/log.service";
import { Dictionary } from "./services/dictionary.service";

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
    
    const fuzzer:Fuzzer = new Fuzzer(
        args.link,
        dictionary.getDictionary(),
        args.keyFuzz,
        log
    );

    fuzzer.start();
}

main();
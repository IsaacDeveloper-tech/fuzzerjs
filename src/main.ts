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


    const log:Log = new Log();
    const dicctionary:Dictionary = new Dictionary();
    const fuzzer:Fuzzer = new Fuzzer();
}

main();
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const args = yargs(hideBin(process.argv))
.option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
    default: false
})
.option("link", {
    alias: "l",
    type: "string",
    description: "Link what yo want to fuzzing, with the --key-fuzz indicated. Ex with key is {}: -l https://{}.google.com",
    demandOption: true
})
.option("dictionary", {
    alias: "d",
    type: "string",
    description: "Path of dictionary",
    demandOption: true
})
.option("key-fuzz", {
    alias: "k",
    type: "string",
    description: "Key to replace by data of dictionary",
    demandOption: true
})
.option("key-split", {
    alias: "s",
    type: "string",
    description: "Key for split dictionary, by default is \\n",
    default: "\n"
})
.parseSync();
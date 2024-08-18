import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const args = yargs(hideBin(process.argv))
.option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
})
.parse();
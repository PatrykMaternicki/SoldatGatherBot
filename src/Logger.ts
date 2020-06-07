import { Errors } from "./dictionary/Errors";
import { Info } from './dictionary/Info';

export default class Logger 
{   
    static chalk: any = require('chalk');
    static ErrorConsole = Logger.chalk.bold.red;
    static SuccessConsole = Logger.chalk.bold.green;

    static setError(error: Errors) : void
    {
        console.log(Logger.ErrorConsole(error));
    }

    static setInfo(info: Info) : void
    {
        console.log(Logger.SuccessConsole(info));
    }
}
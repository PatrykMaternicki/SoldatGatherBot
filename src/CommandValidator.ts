import Command from "./models/Command";

export default class CommandValidator
{
    static commands: any = require('../config/commands.json').commands;

    static isCommand(searchedCommand: string): Command
    {
        let foundCommand: any = CommandValidator.commands.find(command => command.name === searchedCommand);
        return foundCommand === undefined ? new Command(false) : new Command(true, foundCommand);
    }
}
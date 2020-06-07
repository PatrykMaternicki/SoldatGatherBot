import Loader from './src/Loader';
import Logger from './src/Logger';
import { Errors } from './src/dictionary/Errors';
import { Info } from './src/dictionary/Info';
import CommandValidator from './src/CommandValidator';
import Command from './src/models/Command';

class App
{
  config: any;
  discordLib: any;
  discordCollection: any;
  bot: any;
  command: any;
  allowCommand: JSON;

  constructor(env: string)
  {
    this.config = Loader.getConfig(env);
    this.discordLib = require('discord.js');
    this.bot = new this.discordLib.Client();
    this.command = new this.discordLib.Collection();
  }

  async init() : Promise<void>
  {
    if(!this.config) {
      Logger.setError(Errors.CONFIG_LOADER);
    } else {
      Logger.setInfo(Info.CONFIG_LOADER);
      let correctConnection = await this.startConnection();
      if(correctConnection) {
        Logger.setInfo(Info.START_CONNECTION);
        await this.bot.on('message', message => this.dispatchMessage(message));
      }
    }
  }

  async startConnection(): Promise<Boolean> 
  {
    try {
      await this.bot.login(this.config.token);
    } catch(err) {
      throw new Error(err);
    }
    return Promise.resolve(true);
  }

  dispatchMessage(discordObject: any): void
  {
    let command: Command = CommandValidator.isCommand(discordObject.content.replace(this.config.prefix, ''));
    if(command.status) {
      console.log("GOTCHA");
    }
  }
}

let app = new App(process.argv[2]);
app.init();


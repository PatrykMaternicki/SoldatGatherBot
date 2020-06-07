export default class Loader 
{
    static configs = {
        'dev': require('../config/dev.json'),
        'prod': require('../config/prod.json')
    }
    static getConfig(args: string) : JSON
    {   
        return Loader.configs[args];
    }
}
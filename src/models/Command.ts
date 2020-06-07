export default class Command 
{
    properties: any;
    status: Boolean

    constructor(status: Boolean, properties? : any)
    {
        this.properties = properties;
        this.status = status;
    }
}
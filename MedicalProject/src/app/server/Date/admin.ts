//для admin panel
export class Admin{
    readonly adminName: string;
    readonly adminPassword: string;

    constructor (name: string="",password:string=""){
        this.adminName = name;
        this.adminPassword = password;
    }
}
export class Users {
    public id: number;
    public name: string;
    public pwd:string;
    public email:string;

    constructor(id:number,name: string,pwd:string,email:string) {
    this.id = id;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    }
}

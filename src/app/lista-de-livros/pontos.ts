export class Pontos {    
    public id: string; 
    public login: string; 
    public pontos: number;
    public someField: boolean = true;

    constructor(id: string, login: string, pontos: number){
        this.id =  id;
        this.login = login;
        this.pontos = pontos;
        someField: false;
    }
}
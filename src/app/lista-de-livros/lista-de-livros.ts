export class ListaDeLivros {
    
    public id: string; 
    public titulo: string; 
    public autor: string;
    public someField: boolean = true;

    constructor(id: string, titulo: string, autor: string){
        this.id =  id;
        this.titulo = titulo;
        this.autor = autor;
        someField: false;
    }
}
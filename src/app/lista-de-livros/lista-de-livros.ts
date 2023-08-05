export class ListaDeLivros {
    
    public id: string; 
    public titulo: string; 
    public autor: string;
    public descricao: string;
    public someField: boolean = true;

    constructor(id: string, titulo: string, autor: string, descricao: string){
        this.id =  id;
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
        someField: false;
    }
}
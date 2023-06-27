export class ListaDeLivros {
    id: string; 
    titulo: string; 
    autor: string;
    someField: boolean = true;
    constructor(id: string, titulo: string, autor: string){
        this.id =  id;
        this.titulo = titulo;
        this.autor = autor;
        someField: false;
    }
}
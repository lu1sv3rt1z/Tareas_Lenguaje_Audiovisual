//Responsabilidad Unica completar para hacer tarea2
class Libro1{
    titulo:string;
    autor:string;
    contenido:string;

    constructor(titulo:string,autor:string,contenido:string){
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarContenido(){
        return this.contenido;
    }

    guardarEnBaseDeDatos(){
        //Codigo para guardar el libro en la base de datos
        console.log('Guardando el libro ${this.titulo} en la base de datos...')
    }
}

const libro1 = new Libro1('El pricipito','Antoine de Saint-Exupery','Érase una vez...');
libro1.guardarEnBaseDeDatos();
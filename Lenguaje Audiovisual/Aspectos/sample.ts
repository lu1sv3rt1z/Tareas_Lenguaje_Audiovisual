//mostrar en un log de info, toda la informacion del usuario que se esta prestando el libro
//mostrar en un log de info toda la informacio del usuario que esta retornando el libro
//tip debe mostrar el objeto completo del usuario
class Book{
    constructor(public title: string, public author: string,
        public isLoaded: boolean = false
        ,public isAvailable: string,
        private diasRetraso: number,
        public date: string,
        private membresia: string){

    }
}

class User {
    constructor(public userId: string, public name: string, private membresia:string){

    }
}

interface ILoadManager{
    loadbook(book: Book, user: User): void;
    returnbook(book: Book): void;
}

//crear interfaces para logs de Error, Warning, e Info 
//crear un metodo con una logica para validar si un libro tiene el titulo correcto
//si no lo tiene, mostrar un mensaje de error en log y si tiene el mismo nombre 
//mostrar un mensaje de info
//modificar el metodo find para que retorne un warning cuando no encuentre el libro

interface ILogger {
    log(message: string): void;
}

interface logError{
    log(message: string): void;
}

interface logWarning{
    log(message: string): void;
}

interface logInfo{
    log(message: string): void;
}
// tarea 2
interface basico{
    log(message: string): void;
}

interface platino{
    log(message: string): void;
}

interface premium{
    log(message: string): void;
}



class ConsoleLogger implements ILogger,logError, logWarning, logInfo {
    log(message: string): void {
        console.log(message);
    }
}

class Library implements ILoadManager{
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map()
    constructor(private logger: ILogger,private loggerError: logError,private loggerWarning: logWarning,private loggerInfo: logInfo ) {}
    loadbook(book: Book, user: User): void {
        throw new Error("Method not implemented.");
    }

    laodBook(book: Book, user: User): void{
        if(book.isLoaded){
            this.logger.log("Book is Loaded");
            return
        }
        this.loadBooks.set(book.isAvailable, user);
        book.isLoaded = true;
        this.logger.log(`${user.name} has borrowed ${book.title}.`);
    }

    returnbook(book: Book): void {
        if(!book.isLoaded){
            this.logger.log("Book is not Loaded");
        }
        this.loadBooks.delete(book.isAvailable);
        book.isLoaded = true;
        this.logger.log(`${book.title} has borrowed ${book.title}.`);
    }
    
    addBook(book: Book) {
        this.logger.log('Inicio de operacion');
        this.books.push(book);
        this.logger.log('fin de operacion');
    }

    findBookByTitle(title: string) : Book | undefined {
        this.logger.log('Inicio de operacion');
        return this.books.find(book => book.title === title);
        this.logger.log('fin de operacion');
    }

    titleLog(title: string) : void {

        this.logger.log('Inicio de operacion');
        const foundBook = this.findBookByTitle(title);
        if (foundBook) {
            this.loggerInfo.log("Info, the title has been found and has the correct name");
        }
        if (foundBook != this.findBookByTitle(title)) {
            this.loggerError.log("Error, the title has been found and hasn't the correct name");
        }
        if(foundBook === undefined) {
            this.loggerWarning.log("Warning, the book hasn't been found in the B.D");
        }
        this.logger.log('Fin de operacion');
    }

    Lenduser(userId: string, name: string , title: string, author: string, isLoaded: boolean = false, isAvailable: string, date: string){
        this.logger.log('Inicio de operacion');
        const contadordias = 7
        isLoaded = true;
        if(isLoaded === true){
            this.loggerInfo.log("user:"+userId+"\nname:"+name+"\ntitle_book:"+title+"date:"+date+"\ndays available:"+contadordias+"\nis lend book");
        }
        this.logger.log('Fin de operacion');
    }

    DevolutionUser(userId: string, name: string , title: string, author: string, isLoaded: boolean = false, isAvailable: string){
        this.logger.log('Inicio de operacion');
        const contadormulta=0;
        const contadordias = 0;
        if(isLoaded === false && contadordias > 7){
            contadormulta++;
            this.loggerInfo.log("user:"+userId+"\nname:"+name+"\ntitle_book:"+title+"\n is returning"+"\t"contador++);
        }
        return contadordias;
        this.logger.log('Fin de operacion');
    }
    /*Tarea 1 /Problema:
    Supongamos que queremos expandir nuestro sistema para gestionar multas para aquellos usuarios que no devuelvan los libros a tiempo. Cada libro que se pase de la fecha de devolución generará una multa diaria.
    Requisitos:
    1.	Cada libro tiene un tiempo de préstamo estándar de 7 días.
    2.	Una vez que un libro se presta, se debe registrar la fecha de préstamo.
    3.	Cuando un libro es devuelto, el sistema debe calcular si se ha pasado del tiempo estándar y, si es así, determinar cuántos días se ha pasado.
    4.	Por cada día de retraso, se debe generar una multa de $1.*/

    /*Tarea 2
    Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
    Requisitos:
    1.	Membresías de usuario:
        •	Tres tipos de membresías: Básico, Premium y Platino.
        •	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
        •	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
        •  	Platino: Puede pedir prestado un número ilimitado de libros.
    2.	Categorización de libros:
        •	Los libros se categorizan en Ficción, No Ficción, y Referencia.
        •	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
    3.	Historial de préstamos:
        •	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/
    


}
// Uso del codigo
const logger = new  ConsoleLogger();
const library = new Library(logger);
const book1 = new Book('libro1','autor1');

library.addBook(book1);
library.findBookByTitle('libro1');






// Crear un programa que nos permita mostrar libos de una biblioteca y nos permita
//mostrar el nombre del libro
//actualizar el nombre del libro
//Crear el nombre del libro
//Eliminarlo

// Libros fisicos
// Audio Libros
// Libros Digitales
// Libros de hace 100 años

// combinaciones
// no se pueden eliminar audiolibros
// no se pueden actualiazar, ni eliminar libros antiguos
// quiero que al crear libros fisicos y libros digitales me pida diferentes autores

class Book{
    private name : string;
    public time: number;
    private type: string;

    constructor(name: string, time:number, type: string) {
        this.name = name;
        this.time = time;
        this.type = type;
    }
    public getName(): string {
        return this.name;
    }
    public setName(nameNew: string) {
        return this.name = nameNew;
    }

    public getTime():number {
        return this.time;
    }
    public setTime(timeNew:number){
        return this.time = timeNew;
    }

    public getType():string {
        return this.type;
    }
    public setType(typeNew:string){
        return this.type = typeNew
    }

}

class physical_book extends Book{
    constructor (name: string, time: number, type: string){
        super(name, time, type);
    }

}

class listenBook extends Book{
    constructor (name: string, time: number, type: string){
        super(name, time, type);
    }
}

class digitalBook extends Book{
    constructor (name: string, time: number, type: string){
        super(name, time, type);
    }
}

class oldBooks extends Book{
    constructor (name: string, time: number, type: string){
        super(name, time, type);
    }
}
////////////////////////////interfaces
interface IBookP{
    create();
    
}

interface IBookL{

}

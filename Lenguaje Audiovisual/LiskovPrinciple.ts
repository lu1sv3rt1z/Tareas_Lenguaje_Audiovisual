class Animal{
    nombre: string;
    raza:string;

    constructor(nombre:string,raza:string){
        this.nombre = nombre;
        this.raza = raza;
    }

    comer(){
        console.log("comer");
    }

    nadar(){
        console.log("nadar");
    }
}

class Jirafa extends Animal{
    constructor(nombre: string, raza: string){
        super(nombre, raza);
    }

    comer():string{
        return "";
    };
}

class Pato extends Animal{
    constructor(nombre: string, raza: string){
        super(nombre, raza);
    }

    nadar():string{
        return "";
    };
}

class Topo extends Animal{
    constructor(nombre: string, raza: string){
        super(nombre, raza);
    }

    nadar():string{
        return "";
    };

    cavar():string{
        return "";
    };
}

//////////////////////////////////////////////////////
interface IAnimal{
    comer();

}

interface IAnimalAquatico {
    nadar();

}

interface IAnimalSubterraneo  {
    cavar();
}


class Jirafa2 implements IAnimal{
    comer() {
        throw new Error("Method not implemented.");
    }
    nadar() {
        throw new Error("Method not implemented.");
    }

}

class Pato2 implements IAnimalAquatico,IAnimal{
    nadar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    
    
}

class Topo2 implements IAnimalAquatico,IAnimalSubterraneo {
    nadar() {
        throw new Error("Method not implemented.");
    }
    cavar() {
        throw new Error("Method not implemented.");
    }
    
}

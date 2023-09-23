interface Computer{
    componet():string;
    description():string

}


class ComputerSimple implements Computer{
    componet(): string {
        return'Monitor,teclado,CPu,Fuente de poder,Mouse';
    }
    description(): string {
        return "Pc de gama media- baja"
    }
    
}

abstract class ComputerDecorator implements Computer{
    protected computer: Computer;

    constructor(computer: Computer){
        this.computer = computer;
    }

    abstract componet(): string;
    abstract description(): string;
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();


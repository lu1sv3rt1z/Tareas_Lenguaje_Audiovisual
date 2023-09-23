class Vehicle {
    public Type: string;
    public Engine: string;
    public Wheels: number;
    public Color: string;
    public Brand?: string;
    public Fuel?: string;

    constructor(builder:VehicleBuilder){

        this.Type = builder.Type;
        this.Engine = builder.Engine;
        this.Wheels = builder.Wheels;
        this.Color = builder.Color;
        this.Brand = builder.Brand;
        this.Fuel = builder.Fuel;
    }

    vehicleArmor():void{
        console.log(`Type: ${this.Type}`);
        if(this.Engine) console.log(`Engine: ${this.Engine}`);
        if(this.Wheels) console.log(`Wheels: ${this.Wheels}`);
        if(this.Color) console.log(`Color: ${this.Color}`);
        if(this.Brand) console.log(`Brand: ${this.Brand}`);
    }
}

class VehicleBuilder{
    Type:string;
    Engine?:string
    Wheels?:number;
    Color?:string;
    Brand?:string;
    Fuel?:string;

    constructor(Type: string){
        this.Type= Type;
    }

    setEngine(Engine: string): VehicleBuilder {
        this.Engine = Engine;
        return this;
    }

    setWheels(Wheels: number): VehicleBuilder {
        this.Wheels = Wheels;
        return this;
    }

    setColor(Color: string): VehicleBuilder {
        this.Color = Color;
        return this;
    }

    setBrand(Brand: string): VehicleBuilder {
        this.Brand = Brand;
        return this;
    }

    setFuel(Fuel: string): VehicleBuilder {
        this.Fuel = Fuel;
        return this;
    }

    build(): Vehicle{
        return new Vehicle(this);
    }
}

// const myCar = new Vehicle('car', 'V8', 4, 'red', 'Ford', 'gasoline');

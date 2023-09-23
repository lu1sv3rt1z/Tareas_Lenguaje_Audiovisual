class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(builder: BuilderPizza) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
        this.bacon = builder.bacon;
    }
}

class BuilderPizza{
    size: number;
    cheese: boolean = false;
    pepperoni: boolean = false;
    mushrooms: boolean = false;
    bacon: boolean = false;

    constructor(size: number) {
        this.size = size;
    }

    addCheese(): BuilderPizza {
        this.cheese = true;
        return this;
    }
    addPepperoni(): BuilderPizza {
        this.pepperoni = true;
        return this;
    }

    addMushrooms(): BuilderPizza {
        this.mushrooms = true;
        return this;
    }

    addBacon(): BuilderPizza {
        this.bacon = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(this);
    }
}

const pizza = new BuilderPizza(5)
    .addCheese()
    .addPepperoni()
    .addMushrooms()
    .addBacon()
console.log(pizza);;
    



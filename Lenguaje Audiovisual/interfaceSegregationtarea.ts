//Example 1
interface DispositivoMultimedia{
    reproducirMusica():void;
    reproducirVideo():void;
    leerEbook():void;
}

interface PlayMusic{
  reproducirMusica():void;
}

interface PlayVideo{
  reproducirVideo():void;
}

interface ReadEbook{
  leerEbook():void;
}

class Smartphone implements DispositivoMultimedia{
    reproducirMusica(){
        console.log("Reproduciendo música en el smartphone");
    }

    reproducirVideo(){
        console.log("Reproduciendo video en el smartphone");
    }

    leerEbook(){
        console.log("Leyendo eBook en el smartphone");
    }
}

class Ipod implements PlayMusic, PlayVideo{
    reproducirMusica(): void {
      console.log("Reproduciendo musica en el Ipod");
    }

    reproducirVideo(): void {
      console.log("Reproduciendo video en el Ipod");
    }
}

////////////////////////
interface Animal {
    hacerSonido(): void;
  }
  
  interface AnimalTerrestre extends Animal {
    caminar(): void;
  }
  
  interface AnimalAcuatico extends Animal {
    nadar(): void;
  }
  
  interface AnimalAereo extends Animal {
    volar(): void;
  }
  
  class Aguila implements Animal, AnimalAereo, AnimalTerrestre {
    caminar(): void {
      console.log('El aguila camina lentamente');
    }
  
    volar() {
      console.log('El aguila vuela alto en el cielo');
    }
  
    hacerSonido() {
      console.log('El aguila emite un sonido agudo');
    }
  }
  
  class Tiburon implements Animal, AnimalAcuatico {
    nadar() {
        console.log('El tiburon nada rapidamente');
    }
  
    hacerSonido() {
        console.log('El tiburon no hace sonidos audibles fuera del agua');
    }
  }
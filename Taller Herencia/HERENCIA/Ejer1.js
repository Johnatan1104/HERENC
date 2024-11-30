class animal {
    constructor(Nombre,Edad){
        this.Nombre=Nombre;
        this.Edad=Edad;
    }

    hacerSonido(){
        console.log("El animal hace un sonido.");
        console.log("Nombre"+" "+this.Nombre+" "+"Edad"+" "+this.Edad)

    }
}

class perro extends animal{
    constructor(Nombre, Edad,raza){
        super(Nombre,Edad) 
        this.Raza=raza //se agrega la nueva propiedad raza
    }
     hacerSonido(){
        console.log("El Perro ladra: !Guau!");
     }
     laRaza(){
        console.log("La raza es:"," " + this.Raza);
     }
     datos(){
        console.log("El nombre es:" + " "+this.Nombre +" "+ "Edad:" + this.Edad)
     }

}

let animal1 = new animal("bruno",9);
animal1.hacerSonido();
let perro1 = new perro("rocky",3,"ptbull");
perro1.hacerSonido();
perro1.laRaza();
perro1.datos();

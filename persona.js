class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        let texto = "La persona se llama " + this.nombre + " y tiene " + this.edad + " años.";
        return texto;
    }
}
class Animales {

    constructor(suciedad, sueyno, aburrimiento, hambre, nombre) { //parametros que queremos que entren en la classe
       
        this.suciedad = suciedad;
        this.sueyno = sueyno;
        this.aburrimiento = aburrimiento;
        this.hambre = hambre;
        this.nombre = nombre;
    }

    jugar() { //método jugar
        this.aburrimiento = 0;
        this.sueyno += 3;
        this.suciedad += 4;
        this.hambre += 2;
        this.mostrarEstado();
    }

    comer() { //método comer
        this.hambre = 0;
        this.aburrimiento += 3;
        this.sueyno += 3;
        this.suciedad += 2;
        this.mostrarEstado();
    }

    asearse() {
        this.suciedad = 0;
        this.aburrimiento += 3;
        this.sueyno += 3;
        this.hambre += 3;
        this.mostrarEstado();
    }

    dormir() {
        this.sueyno = 0;
        this.aburrimiento += 3;
        this.hambre += 3;
        this.suciedad += 3;
        this.mostrarEstado();
    }

    mostrarEstado() {
        let info = document.getElementById('estado-' + this.nombre);
        info.innerHTML = `${this.nombre} Hambre: ${this.hambre} , Sueño: ${this.sueyno}, Limpieza: ${this.suciedad}, Aburrimiento: ${this.aburrimiento}`;
    }
}
class Zoo{
    constructor(){
        this.animaless=[];
    }
    anadirAnimal(animal){
        this.animaless.push(animal);
    }
}
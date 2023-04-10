//Defino clase 
class persona {
    constructor(nombre, edad, sexo, peso, altura, año,dni) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._año = año;
        this._dni = dni || this.generarDNI();

    }
    set nombre(nuevoNombre) {
        if (nuevoNombre != null) {
            return this._nombre = nuevoNombre;
        }
    }
    get nombre() {
        return this._nombre;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            return this._edad = nuevaEdad;
        }
    }
    get edad() {
        return this._edad;
    }
    set sexo(nuevoSexo) {
        if (nuevoSexo == `H` || nuevoSexo == `M`) {
            return this._sexo = this.nuevoSexo;
        }
    }
    get sexo() {
        return this._sexo;
    }
    set peso(nuevoPeso) {
        if (nuevoPeso > 30) {
            return this._peso = nuevoPeso;
        }
    }
    get peso() {
        return this._peso;
    }
    set altura(nuevaAltura) {
        if (nuevaAltura > 100) {
            return this._altura = nuevaAltura;
        }
    }
    get altura() {
        return this._altura;
    }
    set año(nuevoAño) {
        if (nuevoAño >= 1930 && nuevoAño < 2024) {
            return this._año = nuevoAño;
        }
    }
    get año() {
        return this._año;
    }
    set dni(nuevoDni) {
        if (nuevoDni !== undefined) {
            this._dni = nuevoDni;
        }
        
    }
    get dni() {
        return this._dni;
    }
    mostrarGeneracion() {
        if (this.año >= 1994 && this.año <= 2010) {
            document.write("<h3><br>Pertenece a la generacion: Z</h3>");
            document.write("<h3><br> Rasgo caracteristico: Irreverencia</h3>");
        } else if (this.año >= 1981 && this.año <= 1993) {
            document.write("<h3><br>Pertenece a la generacion: millnials Y</h3>");
            document.write("<h3><br> Rasgo caracteristico: Frustracion</h3>");
        } else if (this.año >= 1969 && this.año <= 1980) {
            document.write("<h3><br>Pertenece a la generacion: X</h3>");
            document.write("<h3><br> Rasgo caracteristico: Obsesion por el Exito</h3>");
        } else if (this.año >= 1949 && this.año <= 1968) {
            document.write("<h3><br>Pertenece a la generacion: Baby Boom</h3>");
            document.write("<h3><br> Rasgo caracteristico: Ambicion</h3>");
        } else {
            document.write("<h3><br>Pertenece a la generacion: Silent Generation (Los niños de la posguerra)</h3>");
            document.write("<h3><br> Rasgo caracteristico: Austeridad</h3>");
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<h3><br> ${this.nombre} Es mayor de edad</h3>`);
        } else {
            document.write(`<h3><br> ${this.nombre} No es mayor de edad</h3>`);
        }
    }
    mostrarDatos() {
        for (let clave in this ) {
            if (typeof this[clave] !== 'function') {
                document.write("<h3><br>"+clave + ': ' + this[clave] + '<br>');
            }        
        }
    }
    generarDNI() {
    let dni = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
    return dni;
}
}

//Defino boton
let botonEnviar = document.getElementById(`enviar`);
let contenedor = document.getElementById(`formulario`);
let inputNombre = document.getElementById(`inputNombre`);
let inputEdad =  document.getElementById(`inputEdad`);
let inputPeso =  document.getElementById(`inputPeso`);
let inputAltura =  document.getElementById(`inputAltura`);
let inputDni =  document.getElementById(`inputDni`);
let inputAñoNac =  document.getElementById(`inputAñoNac`);
let inputSexo =  document.getElementById(`inputSexo`);
//Defino funcion a actuador
botonEnviar.addEventListener("click",capturar);

//Defino la funcion
function capturar(){
    contenedor.style.display =`none`;
const Persona = new persona((inputNombre.value),(inputEdad.value),(inputSexo.value),(inputPeso.value),(inputAltura.value),(inputAñoNac.value),(inputDni.value));
Persona.esMayorDeEdad();
Persona.mostrarGeneracion();
Persona.mostrarDatos();
}
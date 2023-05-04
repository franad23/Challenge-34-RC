// - Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
//  Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
//  cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.


// -----------------Tomamos las variables del HTML y generamos sus varibles en JS----------------
const $nombre = "";
const $edad = 0;
let $sexo = "";
const $peso = 0;
const $altura = 0;
const $nacimiento = 0;
const $mostrarDatos = document.getElementById('mostrarDatos');
const $mayorEdad = document.getElementById('mayorEdad');
const $generacionBtn = document.getElementById('generacionBtn');
const $dniBtn = document.getElementById('dniBtn');
let user;
const dataPers = [];
const $formulario = document.getElementById('formulario');

// -------------------Creamos la clase PERSONA con sus Metodos y atributos-----------------

class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = 0;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion () {
        let gen = 2023 - this.edad;
        console.log(gen);
        switch(true) {
            case gen < 2010 && gen > 1993:
                alert('Eres de la generacion Z y tu rasgo caracteristico es "Irreverente"');
                break;
            case gen < 1994 && gen > 1981:
                alert('Eres de la generacion Y y tu rasgo caracteristico es "Frustracion"');
                break;
            case gen < 1981 && gen > 1969:
                alert('Eres de la generacion X y tu rasgo caracteristico es "Obsesion por el exito"');
                break;
            case gen < 1968 && gen > 1949:
                alert('Eres de la generacion Baby Boom y tu rasgo caracteristico es "Ambicion"');
                break;
                
            case gen < 1948 && gen > 1930:
                alert('Eres de la generacion Silent Generation y tu rasgo caracteristico es "Austeridad"');
                break;

        }
    }
    esMayorDeEdad () {
        if (this.edad > 18) {
            alert(`${this.nombre} es mayor de edad`);
        }else {
            alert(`${this.nombre} es menor de edad`)
        }
    
    }
    generaDNI() {
        this.dni = Math.round(Math.random()*99999999);
        alert(`Tu numero de DNI es ${this.dni}`)
    }
}
// -------------Creamos el Listener del FORM que recolecta los datos y los pushea al array para despues generar el Objeto a partir de la clase-------
const enviarFormulario = (e) => {
    e.preventDefault();
    if (document.getElementById('sexoF').checked) {
        $sexo = "Femenino"
    }else {
        $sexo = "Masculino"
    }
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    dataPers.push(data);
    dataPers[0].sexo = $sexo;
    user = new Persona (dataPers[0].nombre, dataPers[0].edad, dataPers[0].sexo, dataPers[0].peso, dataPers[0].altura, dataPers[0].nacimiento)
    $formulario.reset()
}
$formulario.addEventListener('submit', enviarFormulario);


// -------A partir de aca se crean los LISTENER de cada boton para llamar a los metodos de clase creada-----------------
$mayorEdad.addEventListener('click', () => {
    user.esMayorDeEdad();
});

$generacionBtn.addEventListener('click', () => {
    user.mostrarGeneracion();
})

$dniBtn.addEventListener('click', () => {
    user.generaDNI();
})

$mostrarDatos.addEventListener('click', () => {
    alert(JSON.stringify(user))
})


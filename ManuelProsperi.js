//Array para realizar pruebas
let programadores=[
    {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, experiencia: 4,
   lenguajes: ['C++','JS', 'PHP']},
    {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, experiencia: 5, lenguajes:
   ['C','JS', 'Java']},
    {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
   ['Python','JS', 'Java','C++']}
   ]

export function ejercicio1 (programadores){
    let resultado;
    /*  - Colección con todos los programadores. 
        - Para cada programador un objeto complejo con nombre, apellido1 
        y apellido2
        - Ordenados por nombre de forma ascendente*/
    resultado = programadores.map(programador => (
        {
            nombre: programador.nombre,
            apellido1: programador.apellido1,
            apellido2: programador.apellido2
        }
    )).sort((a,b) => a-b);
    return resultado;
}
export function ejercicio2 (programadores){
    let resultado;
    /*  Colección con todos lo programadores incluyendo para cada programador los
        atributos originales más el atributo categoría que puede tener 2 valores:
        “junior” si tiene menos de 5 años de experiencia
        “senior” si tiene 5 o más años de experiencia.*/
    resultado = programadores.map(programador => (
        {
            nombre: programador.nombre,
            apellido1: programador.apellido1,
            apellido2: programador.apellido2,
            edad: programador.edad,
            experiencia: programador.experiencia,
            lenguajes: programador.lenguajes,
            categoria: programador.experiencia < 5 ? `junior` : `senior`
        }
    ));

    return resultado;
}

export function ejercicio3 (programadores){
    let resultado;
    /*  Suma Total de años de experiencia de los programadores mayor que 24 años*/
    resultado = programadores.filter(programador => programador.edad > 24)
    .reduce((total,programador) => total + programador.experiencia, 0);
    return resultado;
}
export function ejercicio4 (programadores, anios){
    let resultado;
    /*  Colección de programadores cuya experiencia es superior número de años
        pasado por parámetro.*/
    resultado = programadores.filter(programador => programador.experiencia > anios);
    return resultado;
}
export function ejercicio5 (programadores, nombre){
    let resultado;
    /*  Retorna el objeto programador cuyo nombre es el nombre pasado por parámetros*/
    resultado = programadores[programadores.findIndex(programador => programador.nombre==nombre)];
    return resultado;
}
export function ejercicio6 (programadores, nombre){
    let resultado;
    /*  Retorna TRUE si hay algún programador cuyo nombre es el nombre pasado por parámetros.
        En caso contrario retorna FALSE*/
    resultado = programadores.some(programador => programador.nombre == nombre);
    return resultado;
}
export function ejercicio7 (key, ...lenguajes){
    /* La función tiene un número variable de parámetros.
       El primero es una clave y resto son lenguajes de programación
       La función guarda en el localStorage con la clave los lengajes como
       un string separados por comas.
       Ejemplo de paso de parámetros:
       ejercicio7("lenguajes", "PHP", "C++", "Java")
       Se almacena con la clave lenguajes el string "PHP,C++,Java"

    */
   localStorage.setItem(key, JSON.stringify(lenguajes));
   resultado = JSON.parse(localStorage.getItem(key));
   resultado = resultado.join(',')
   return resultado;
}
export function ejercicio8 (nombre, apellido1, apellido2 ){
    let resultado;
    /* Retorna un objeto programador con 3 atributos (con el mismo nombre que los parámetros)
       con los datos pasados por parámetros.
       DEBES UTILIZAR notación de CORCHETES para crear los atributos

    */
   resultado = 
   {
       nombre: nombre,
       apellido1: apellido1,
       apellido2: apellido2 
   };
   return resultado;
}
export function ejercicio9 (nombre, apellido1, apellido2){
    let nombreCompleto;
    /* Retorna un string ooncatenando los parámetros con plantilla de cadena de caracteres*/
    nombreCompleto = nombre.concat(" ",apellido1," ",apellido2);

   return nombreCompleto;
}
export function ejercicio10 (numDias){
    let milisegundo;
    /* Convierte numDias en milisegundos.Retorna el número total de milisegundo */
    milisegundo = 1000 * 60 * 60 * 24 * numDias;
   return milisegundo;
}
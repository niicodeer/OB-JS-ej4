let nombre = "Nicolas";
let apellido = "Radin";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante =  nombre.concat(" ",apellido);
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let charLen = estudiante.length;
console.log(charLen);

//Una variable que contenga la primera letra del Nombre
let firstChar = nombre[0];
console.log(firstChar);

//Otra variable que contenga la última letra del Apellido
let lastChar = apellido[apellido.length-1];
console.log(lastChar);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let noSpace = estudiante.replace(" ", "");
console.log(noSpace);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nameIn = estudiante.includes(nombre)
console.log(nameIn);


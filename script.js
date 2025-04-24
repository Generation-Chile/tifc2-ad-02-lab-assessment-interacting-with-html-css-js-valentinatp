/* Modifique el primer "¡Hola mundo!" decir "Adiós" con JS */
let elPrimerEncabezado = document.getElementById('cambiarTexto');
console.log(elPrimerEncabezado);
let reemplazoTexto = elPrimerEncabezado.textContent = '¡Adios!';
/* Cambiar el color de fuente de un encabezado a naranja con JS */
let elEncabezadoNaranja = document.getElementById('encabezadoNaranja');
console.log(elEncabezadoNaranja);
let cambioDeColor = elEncabezadoNaranja.style.color = 'orange';
/* Agregue un encabezado en el que se pueda hacer clic y que cambie el color de la fuente a marrón con JS */
let elEncabezadoMarron = document.getElementById('encabezadoMarron');
console.log(elEncabezadoMarron);
function changeColor(){
    elEncabezadoMarron.style.color = 'brown';
}
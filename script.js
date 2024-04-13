//Importamos los objetos de 'ciudades.js' (desestructurar)
import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un evento Click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //Remover el enlace ACTIVO (de todos)
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });

        //Agregar ACTIVO al enlace que corresponda
        this.classList.add('active') //this es "enlace" (del primer forEach) - agregamos al <a class="active">Londres</a>

        //Traer la info del objeto correspondiente a la eleccion
        let contenido = obtenerContendido(this.textContent) //Esto es Barcelona por ejemplo, viene de la consola de HTML (como propiedad)

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })
})

//Funcion para traer la info correcta desde "ciudades.js"
function obtenerContendido(enlace) { //le envio uno de los 4 enlaces
    let contenido = { //va a tener uno de estos 4
        'Barcelona': barcelona, //'Barcelona' es el string que esta en <li><a>Barcelona</a></li> y 'barcelona' es el objeto de ciudades.js
        'Roma': roma, //cada uno de estos viene del IMPORT!!!!!!!!
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]; //de todo el object, va a seleccionar el enlace que elegimos
}
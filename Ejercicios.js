
function esperar(tiempo){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperamdo ${tiempo} ms`);
        }, tiempo)
    })
}

// La funcion esperar recibe un tiempo.
//Dentro de la funcion crea una promesa, cuya funcion 
// Utiliza el setTimeOut: 
//Este metodo recibe una funcion y un tiempo.

esperar(2000)
    .then((resultado) => {
        console.log(resultado);  
    })
// llamo a la funcion  esperar le paso el tiempo,
// y le digo que es lo que tiene que hacer
//imprimir el resultado
    .catch((error) => {
        console.log('Error:', error);
    })
//Si no resuelve la promesa sale por el catch


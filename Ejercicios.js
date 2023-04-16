
//Ejercicio1
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


//Ejercicio 2
async function esperar(tiempo){
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperando ${tiempo} ms `);
        }, tiempo);
    })
    console.log(resultado);
}
//

esperar(2000);

//Ejercicio 3
const usuario = {
    idUsuario : 1,
    nombre : "Camilo",
    publicaciones : ["Hola", "Como estas", "Chau"]
}

function obtenerUsuario(idUsuario){
    return new Promise((resolve) => {
        setTimeout(() => {
            if(idUsuario == usuario.idUsuario) {
                resolve(usuario);
            }
        },2000);
    })
}

function obtenerPublicaciones(idUsuario){
    return new Promise((resolve) => {
        setTimeout(() => {
            if(idUsuario == usuario.idUsuario) {
                resolve(usuario.publicaciones);
            } 
        },2000);
    })
}

async function obtenerInformacionCompletaUsuario(idUsuario){
    try{
        obtenerUsuario(idUsuario)
        .then((resultado) => {
            const usuario = resultado;
            console.log(`Nombre de usuario: ${usuario.nombre}`);
        });
        obtenerPublicaciones(idUsuario)
        .then((resultado) => {
            const publicaciones = resultado;
            console.log(`Publicaciones del usuario: ${publicaciones.join(',')}`);
        });
    } catch(error){
        console.log('Error:', error);
    }
} 

obtenerInformacionCompletaUsuario(1);

//Ejercicio4
const usuario2 = {
    idUsuario : 2,
    nombre : "Juan",
    publicaciones : ["Chau","Como estas","Hola"]
}

function obtenerUsuario2(idUsuario){
    return new Promise((resolve) => {
        setTimeout(() => {
            if(idUsuario == usuario2.idUsuario) {
                resolve(usuario2);
            }
        },2000);
    })
}

function obtenerPublicaciones2(idUsuario){
    return new Promise((resolve) => {
        setTimeout(() => {
            if(idUsuario == usuario2.idUsuario) {
                resolve(usuario2.publicaciones);
            } 
        },2000);
    })
}

Promise.all([
    obtenerUsuario2(2),
    obtenerPublicaciones2(2)
])
.then((resultados) => {
    resultados.forEach((resultado) => console.log(resultado.nombre, resultado.publicaciones.join(',')));
})
.catch((error) => {
    console.log("Algo salio mal:", error);
})


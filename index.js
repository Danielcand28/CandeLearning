//un array es una lista de datos

// lo siguiente es para agregar datos al array
const cursos = ["algebra" , "trigonometria" , "geometria"];
function cursoescogido() {

    let cursoseleccionado = document.getElementById("elige").value;
    // ahora  enviare los datos ingresados por el usuario al array, eso lo hago con push y nombrando la variable que tiene los datos
    
    cursos.push(cursoseleccionado);
    document.getElementById("respuesta").innerHTML=cursos;
}

// lo siguiente es para quitar datos del array

    function cursoeliminado() {
    cursos.shift([0]);
    document.getElementById("respuesta").innerHTML=cursos;
    }




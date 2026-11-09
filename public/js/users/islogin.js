// JavaScript Document
// validate that user is log-in
var auth = firebase.apps[0].auth();
var timeoutInactividad; // Variable para el Punto 5 del Lab

function reiniciarTemporizador() {
    clearTimeout(timeoutInactividad);
    timeoutInactividad = setTimeout(salir, 180000); // 3 minutos
}

function validar() {
    var uid = -1;
    auth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
            // Requerimiento Lab 5: Detectar actividad del usuario
            window.onload = reiniciarTemporizador;
            document.onmousemove = reiniciarTemporizador;
            document.onkeydown = reiniciarTemporizador;
        } else {
            document.location.href = 'login.html';
        }
    });
    return uid;
}

// close current session
function salir(){
    auth.signOut().then(() => {
        document.location.href ='login.html';
    }).catch((error)=>{
       alert('Error al cerrar la sesión: ' + error.message);
    });
}
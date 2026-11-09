var db = firebase.apps[0].firestore();

const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const txtArchi = document.querySelector('#txtArchi');
const btnLoad  = document.querySelector('#btnLoad');

// Variables del Punto 2 del Laboratorio
const selElemento = document.querySelector('#selElemento');
const txtAstro = document.querySelector('#txtAstro');
const txtPiedra = document.querySelector('#txtPiedra');

btnLoad.addEventListener('click', function(){
    const archivo = txtArchi.files[0];
    if(archivo == null){
        alert('Debe seleccionar una imagen');
    } else {
        const nomarch = archivo.name;
        
        // RUTA LOCAL SIMULADA: Esto apunta directamente a tu carpeta public/img/zodiaco/
        const simulatedUrl = "img/zodiaco/" + nomarch;

        db.collection("datosZodiaco").add({
            "posic" : parseInt(txtPosic.value),
            "signo" : txtSigno.value,
            "rango" : txtRango.value,
            "url"   : simulatedUrl, // Se guarda "img/zodiaco/nombre_imagen.png" en Firestore
            "elemento": selElemento.value,
            "astro": txtAstro.value,
            "piedra": txtPiedra.value
        }).then(function(docRef) {
            alert("Signo guardado correctamente. ID: " + docRef.id);
            limpiar();
        }).catch(function(FirebaseError) {
            alert("Error al subir los datos: " + FirebaseError);
        });
    }
});

function limpiar(){
    txtPosic.value = '';
    txtSigno.value = '';
    txtRango.value = '';
    txtArchi.value = '';
    selElemento.value = 'Fuego';
    txtAstro.value = '';
    txtPiedra.value = '';
    txtPosic.focus();
}
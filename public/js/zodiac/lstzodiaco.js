// JavaScript Document
var db = firebase.apps[0].firestore();

const tabla = document.querySelector('#tabla');

db.collection("datosZodiaco").orderBy('posic', 'asc').get().then(function(query){
    tabla.innerHTML = "";
    var salida = "";
    query.forEach(function(doc){
        const signoData = doc.data();
        salida += '<div class="divAnuncio m-3 p-2" style="cursor:pointer;" onclick="window.location.href=\'modificar.html?id=' + doc.id + '\'">';
            salida += '<div class="imgBlock"><img src="' + signoData.url + '" width="100%" /></div>';
            salida += '<div class="fw-bold mt-2">' + signoData.signo + '</div>';
            salida += '<div class="text-muted small">' + signoData.rango + '</div>';
            // Nuevos datos requeridos por el Punto 3 del Laboratorio
            salida += '<hr class="my-1">';
            salida += '<div class="small text-start px-2">';
                salida += '<strong>Elemento:</strong> ' + (signoData.elemento || 'N/D') + '<br>';
                salida += '<strong>Astro:</strong> ' + (signoData.astro || 'N/D') + '<br>';
                salida += '<strong>Piedra:</strong> ' + (signoData.piedra || 'N/D');
            salida += '</div>';
        salida += '</div>';
    });
    tabla.innerHTML = salida;
});
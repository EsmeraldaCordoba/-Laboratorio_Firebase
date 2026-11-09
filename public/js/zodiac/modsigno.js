var db = firebase.apps[0].firestore();
const txtId = document.querySelector('#txtId');
const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const selElemento = document.querySelector('#selElemento');
const txtAstro = document.querySelector('#txtAstro');
const txtPiedra = document.querySelector('#txtPiedra');
const btnUpdate = document.querySelector('#btnUpdate');

const urlParams = new URLSearchParams(window.location.search);
const docId = urlParams.get('id');

if (docId) {
    txtId.value = docId;
    db.collection("datosZodiaco").doc(docId).get().then(function(doc) {
        if (doc.exists) {
            const data = doc.data();
            txtPosic.value = data.posic;
            txtSigno.value = data.signo;
            txtRango.value = data.rango;
            selElemento.value = data.elemento || 'Fuego';
            txtAstro.value = data.astro;
            txtPiedra.value = data.piedra;
        }
    });
}

btnUpdate.addEventListener('click', function() {
    db.collection("datosZodiaco").doc(txtId.value).update({
        "posic": parseInt(txtPosic.value),
        "signo": txtSigno.value,
        "rango": txtRango.value,
        "elemento": selElemento.value,
        "astro": txtAstro.value,
        "piedra": txtPiedra.value
    }).then(function() {
        alert("Actualizado correctamente");
        document.location.href = 'lista.html';
    });
});
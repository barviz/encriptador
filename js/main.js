var encriptar = document.querySelector(".btnEncriptar");
var desencriptar = document.querySelector(".btnDesencriptar");
var copiar = document.querySelector(".btnCopiar");
var area = document.querySelector(".areaIzq");
var limpiar = document.querySelector(".btnLimpiar");

encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;
copiar.onclick = copiarTexto;
area.onclick = volverAside;
limpiar.onclick = limpiarArea;

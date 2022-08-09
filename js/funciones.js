var textoEncriptado = ""
var subtextoderecho = document.getElementById("subtextoDer");

function encriptarTexto() {
   var areaizquierda = document.getElementById("areaIzq").value;
   if (textoEncriptado != areaizquierda || textoEncriptado == "") {
      if (areaizquierda.trim() != "") {
         traspasarTexto(agregarEncriptado(areaizquierda));
         textoEncriptado = agregarEncriptado(areaizquierda);
         subtextoderecho.innerHTML = "¡Mensaje Encriptado Satisfactoriamente!"
      } else {
         swal("¡Atención! ", "No fue ingresado un mensaje a encriptar.", {
            buttons: false,
            timer: 2500,
         });
         areaIzq.focus()
      }
   } else {
      swal("¡Atención! ", "Este mensaje ya fue encriptado.", {
         buttons: false,
         timer: 2500,
      });
   }
}

function desencriptarTexto() {
   var areaizquierda = document.getElementById("areaIzq").value;

   if (areaizquierda.trim() != "") {
      traspasarTexto(quitarEncriptado(areaizquierda));
      subtextoderecho.innerHTML = "¡Mensaje Desencriptado Satisfactoriamente!"
   } else {
      swal("¡Atención! ", "No fue ingresado un mensaje a desencriptar.", {
         buttons: false,
         timer: 2500,
      });
      areaIzq.focus()
   }
}

function agregarEncriptado(texto) {
   var textos = "";

   for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
         textos += "ai";
      }
      else if (texto[i] == "e") {
         textos += "enter";
      }
      else if (texto[i] == "i") {
         textos += "imes";
      }
      else if (texto[i] == "o") {
         textos += "ober";
      }
      else if (texto[i] == "u") {
         textos += "ufat";
      }
      else {
         textos += texto[i];
      }
   }
   return textos.toLowerCase();
}

function quitarEncriptado(texto) {
   var textos = "";

   for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
         textos += "a";
         i = i + 1;
      }
      else if (texto[i] == "e") {
         textos += "e";
         i += 4;
      }
      else if (texto[i] == "i") {
         textos += "i";
         i += 3;
      }
      else if (texto[i] == "o") {
         textos += "o";
         i += 3;
      }
      else if (texto[i] == "u") {
         textos += "u";
         i += 3;
      }
      else {
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}

function volverAside() {
   copiar.value = "Copiar";
}

function traspasarTexto(texto) {
   var areaDer = document.querySelector(".areaDer")
   areaDer.innerHTML = texto;
}

function copiarTexto() {
   var areaderecha = document.querySelector(".areaDer");
   var areaizquierda = document.getElementById("areaIzq");
   areaizquierda.value = areaderecha.innerHTML;
   navigator.clipboard.writeText(areaderecha.innerHTML);
   copiar.value = "Copiado!";
   swal("¡Mensaje Copiado! ", "El mensaje fue copiado y está listo para desencriptar", {
      buttons: false,
      timer: 2500,
   });
}

function limpiarArea() {
   document.getElementById("areaIzq").value = "";
}
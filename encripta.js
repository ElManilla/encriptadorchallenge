
function encriptarDesencriptar() {
  var texto = document.getElementById("texto").value;
  var opcion = document.getElementById("opcion").value;
  var resultado = "";

  if (opcion == "encriptar") {
    resultado = texto.replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  } else if (opcion == "desencriptar") {
    resultado = texto.replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  }

  document.getElementById("resultado").value = resultado;
}

function copiarResultado() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
}

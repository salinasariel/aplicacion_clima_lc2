function limpiarForm() {
    let formulario = document.getElementById("form-ayuda");
    formulario.reset()
}

function send(){
  let mail = document.getElementById("mensaje");
  validarEmail(mail);
}

function validarEmail(email) {
  let error = document.getElementById("mensaje");
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ( !expr.test(email) ){
      error.style.display = "block";
      setInterval(function(){
          error.style.display = "none";
      }, 2000);
  }
}

function contactBlock(){
  let cartelContact = document.getElementById("contact");
  
  let cartelInfo = document.getElementById("info");
  cartelInfo.style.display = "none";
  
  cartelContact.style.display = "block";
}
function volver(){
  let cartelContact = document.getElementById("contact");
  let textoAyuda = document.getElementById("tituloAyuda");
  let cartelInfo = document.getElementById("info");
  cartelInfo.style.display = "block";
  textoAyuda.style.display = "block";
  cartelContact.style.display = "none";
}
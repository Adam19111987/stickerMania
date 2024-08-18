clave1 = document.querySelector('#opc1').value;
clave2 = document.querySelector('#opc2').value;
clave3 = document.querySelector('#opc3').value;
VTTCueerificar = document.querySelector('#verificar');
goBoton = document.querySelector('#Go');
texto_pase = document.querySelector('#textopasar');


verificar.addEventListener('click', function(){
    if(clave1 == 9 && clave2 == 1 && clave3 == 1){
        goBoton.disabled = false;
        texto_pase.innerHTML = "Password  correcto puede presionar el boton Go!"
        goBoton.style.backgroundColor = "#01ace5";
    } else{
        texto_pase.innerHTML = "Password  Incorrecto!"
  setTimeout(function(){
    location.reload();
  },2000)
     goBoton.disabled = true;
        
    }
})
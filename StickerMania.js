document.querySelectorAll(".imagen").forEach((img) => {
  img.addEventListener("click", function () {
    this.classList.toggle("borde_rojo");
  });
});

primer_stkr = document.querySelector("#primer_stkr").value;
conver_primer_stkr = Number(primer_stkr);
segundo_stkr = document.querySelector("#segundo_stkr").value;
conver_segundo_stkr = Number(segundo_stkr);
tercer_stkr = document.querySelector("#tercer_stkr").value; 
conver_tercer_stkr = Number(tercer_stkr);
sumaTotal = conver_primer_stkr + conver_segundo_stkr + conver_tercer_stkr;
leyenda = document.querySelector("#leyenda");

verificador = document.querySelector("#verificar");
descagar = document.querySelector("#descargar");

verificador.addEventListener("click", function () {
    console.log(sumaTotal);
    console.log(conver_primer_stkr);
    console.log(conver_segundo_stkr);
    console.log(conver_tercer_stkr);

  if ( sumaTotal > 0 && sumaTotal <= 10) {
    leyenda.innerHTML =
      " Limite permitido, adelante puedes descargar los Stickers";
    descagar.disabled = false;
    descagar.style.backgroundColor = "#01ace5";
   
  } 

  else if(sumaTotal <= 0){
    leyenda.innerHTML = "Aun no ha selecionado la cantidad de los stiker que desea descargar"
    descagar.disabled = true;
    
    setTimeout(function () {
      location.reload();
    }, 3000);
  }




  else {
    leyenda.innerHTML = "La cantidad seleccionada supera el limite permitido";
    descagar.disabled = true;
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
});

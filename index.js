function calcularIMC() {
  var altura = parseFloat(document.getElementById("faltura").value);
  var peso = parseFloat(document.getElementById("lpeso").value);
  var calculo = peso / (altura * altura);
  var calc = calculo.toFixed(1);
  var resultado = "Seu IMC é: "+calc+". Resultado: ";

  if (calc < 18.5) {
    resultado += "Magreza";
  }else if(18.5 <= calc < 24.9){
    resultado += "Normal";
  }else if(24.9 <= calc <30){
    resultado += "Sobrepeso";
  }else if(calc >= 30){
    resultado += "Obesidade";
  }


  document.querySelector("div.resultado").innerHTML = resultado;
}

window.onload = function () {
  document.getElementById("btn").addEventListener("click", calcularIMC);
};


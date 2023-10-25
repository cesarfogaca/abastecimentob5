
// Função Check do segundo tanque do veículo 1
function yesnoCheck2() {
    if (document.getElementById('yesCheck2').checked) {
       document.getElementById('ifYes').style.display = 'block';
    } else {
       document.getElementById('ifYes').style.display = 'none';
    }
}



// Função Check Arla 32
function yesnoCheck() {
    if (document.getElementById('yesCheckA').checked) {
       document.getElementById('ifYesArla').style.display = 'block';
    } else {
       document.getElementById('ifYesArla').style.display = 'none';
    }
}



// Função Outros veículos
function yesnoCheckV() {
   if (document.getElementById('yesCheckV').checked) {
      document.getElementById('ifYesV').style.display = 'block';
   } else {
      document.getElementById('ifYesV').style.display = 'none';
   }
}


// Função Check do segundo tanque do veículo 2
function yesnoCheck3() {
   if (document.getElementById('yesCheck3').checked) {
      document.getElementById('ifYes3').style.display = 'block';
   } else {
      document.getElementById('ifYes3').style.display = 'none';
   }
}


// Função Check Arla 32 no veículo 2
function yesnoCheckA2() {
   if (document.getElementById('yesCheckA2').checked) {
      document.getElementById('ifYesA2').style.display = 'block';
   } else {
      document.getElementById('ifYesA2').style.display = 'none';
   }
}

// Função pop-up de envio de formulário
function notifyMe() {
     alert("Informações enviadas com sucesso!");
}
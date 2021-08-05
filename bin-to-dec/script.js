function traduzir() {
  let entrada = document.querySelector(".input-text-bin")
  let binario = entrada.value
  let binArray = []

  /*VERIFICAÇÃO DA ENTRADA*/

  for (let bin in binario) {  //transforma a string em array
    binArray.push(binario[bin])
  }

  if(binArray.some((value) => value !== '0' && value !== '1')) { //verifica se tem algum valor diferente de 0 ou 1 no array
    alert("A entrada não é um número binário")  //se tiver, cria uma alerta e finaliza a funçao
    return
  }

  /* LÓGICA DE TRANSFORMAÇÃO DE BINARIO PARA DECIMAL */
  let decimal = 0
  binArray.filter((value) => value == '1').forEach((element, index) => decimal += (2 ** (binArray.length - (index + 1))))

  document.querySelector(".output-text-dec").value = decimal
}

function apagar() {
  document.querySelector(".input-text-bin").value = ''
  document.querySelector(".output-text-dec").value = ''
}

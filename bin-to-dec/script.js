function traduzir() {
  let entrada = document.querySelector(".input-text-bin")
  let binario = entrada.value
  let binArray = []
  let html

  /*VERIFICAÇÃO DA ENTRADA*/

  for (let bin in binario) {  // "transforma a string em array"
    binArray.push(binario[bin])
  }

  if(binArray.some((value) => { //verifica se tem algum valor diferente de 0 ou 1 no array
    return value !== '0' && value !== '1' //retorna se tem ou nao
  })) {
    alert("A entrada não é um número binário")  //se tiver, cria uma alerta e finaliza a funçao
    return
  }

  /* LóGICA DE TRANSFORMAÇÃO DE BINARIO PARA DECIMAL */
  let decimal = 0
  let index = binArray.length - 1

  for(let num in binArray) {
    if(binArray[num] === '1') {
      decimal += 2 ** index
    }
    index--
  }

  let saida = document.querySelector(".output-text-dec")
  saida.value = decimal

}

function apagar() {
  let entrada = document.querySelector(".input-text-bin")
  let saida = document.querySelector(".output-text-dec")
  entrada.value = ''
  saida.value = ''
}

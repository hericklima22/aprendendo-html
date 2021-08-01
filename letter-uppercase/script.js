//esta função é executada toda ver que clicamos no botão de enviar
function enviar() {
    const entrada = document.querySelector("#frase")
    let fraseString = entrada.value
    fraseString = fraseString.toLowerCase()
    let novaString = ""
    novaString += fraseString[0].toUpperCase()
    //console.log(novaString)

    let index = 1

    while(index < fraseString.length) {
        (fraseString[index - 1] !== " ") ?
        novaString += fraseString[index] : 
        novaString += fraseString[index].toUpperCase()

        index++
    }

    console.log(novaString)

    //esta parte do código é a saída, onde ele apresenta a frase pronta para o usuário
    let html = '<h4 style="color: white;">'
    html += novaString.toString()
    html += '</h4>'

    document.querySelector('.frase-pronta').innerHTML = html
    
}


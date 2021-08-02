//esta função é executada toda ver que clicamos no botão de enviar
function firstLetterUppercase() {
    const entrada = document.querySelector("#frase1")
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
    let html = '<h4 style="color: black;">'
    html += novaString.toString()
    html += '</h4>'

    document.querySelector('#id-frase1').innerHTML = html
    
}

function allUpperCase() {
    let entrada = document.querySelector("#frase2")
    let frase = entrada.value.toString()
    let fraseUpperCase = frase.toUpperCase()

    let html = '<h4 style="color: black;">'
    html += fraseUpperCase
    html += '</h4>'

    document.querySelector("#id-frase2").innerHTML = html
}

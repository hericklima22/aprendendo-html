const column = 10
const row = 10

const array = []

function start() {
    calculateCellValue()
    drawMatrix(column, row)
}

function calculateCellValue() {
    let arraySize = column * row

    for(let index = 0; index < arraySize; index++) {
        array.push(Math.floor(Math.random() * 10))
    }
}

function drawMatrix(column, row) {
    let html = '<table cellpadding=0 cellspacing=0>'
    let btnIndex = 0

    for(let i = 0; i < row; i++) {
        html += '<tr>'
            
            for(let j = 0; j < column; j++) {

                html += '<td>'
                html += `<div class="cell-content"><input class="buttons" id="btn${btnIndex}" value="${array[btnIndex]}" type="button" onClick="btnPress(${btnIndex})"></input></div>`
                html += '</td>'
                btnIndex++
            }

            html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#matrix').innerHTML = html
}

function btnPress(btnIndex) {
    
}


start()

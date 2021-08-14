const column = 10
const row = 10

const array = []

function start() {

    drawMatrix(column, row)
}

function drawMatrix(column1, row1) {
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let row = 0; row < row1; row++) {
        html += '<tr>'
            
            for(let column = 0; column < column1; column++) {
                html += '<td>'
                html += `<div class="pixel-index">${column}</div>`
                html += '</td>'
            }

            html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#matrix').innerHTML = html
}

start()

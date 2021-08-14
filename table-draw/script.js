const column = 10
const row = 10

function drawMatrix(column, row) {
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let i = 0; i < row; i++) {
        html += '<tr>'
        for (let j = 0; j < column; j++) {
            html += '<td>'
            html += `<div class="cell-index">${j}</div>`
            html += '</td>'
        }
        html += '</tr>'
    }

    html = '</table>'
    document.querySelector('#matrix').innerHTML = html
}

drawMatrix(column, row)
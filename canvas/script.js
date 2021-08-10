var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var squareSize = 20

var canvasRowInitial = 0,
    canvasColumnInitial = 0,
    canvasRowFinal = canvas.width - squareSize,
    canvasColumnFinal = canvas.height - squareSize,
    wallUp = 0, wallDown = 0, wallRight = 0, wallLeft = 0,
    speed = 5, row = 0, col = 0

function desenhar() {
    requestAnimationFrame(desenhar)
    ctx.fillStyle = 'white'
    var varString = ''
    
    if(col < canvasColumnFinal - wallRight) {
        ctx.fillRect(col += speed , row, squareSize, squareSize)
        if(col == canvasColumnFinal - wallRight) {wallRight += squareSize; varString += 'if'}
    } else if(row < canvasRowFinal - wallDown) {
        ctx.fillRect(col, row += speed, squareSize, squareSize)
        
    } else if (col > 0) {
        ctx.fillRect(col -= speed, row, squareSize, squareSize)
        varString += 'else'
        
    }

    console.log(varString)
    
}
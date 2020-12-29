const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight - 100
ctx.strokeStyle = "#000000"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 5

let isDrawing = false

let lastX = 0
let lastY = 0

function draw(e) {
    if (!isDrawing) return
    ctx.beginPath()

    ctx.moveTo(lastX, lastY)

    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]

}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    var bColor = document.getElementById("Background").value
    document.getElementById("draw").style.background = bColor;
    if (!selectedEraser) {
        var color = document.getElementById("base").value
        ctx.strokeStyle = color
    }


    var size = document.getElementById("size").value
    ctx.lineWidth = size
}
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

var selectedEraser = false

function selectEraser() {
    selectedEraser = selectedEraser === true ? false : true

    if (selectedEraser) {
        ctx.strokeStyle = document.getElementById("Background").value
    } else {
        ctx.strokeStyle = document.getElementById("base").value
    }

}
const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 200
ctx.strokeStyle = "#000000"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 5

let isDrawing = false

let lastX = 0
let lastY = 0



//Draw
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


//Select color 
function handleUpdate() {
    if (!selectedEraser) {
        var color = document.getElementById("base").value
        ctx.strokeStyle = color
    }
    var size = document.getElementById("size").value
    ctx.lineWidth = size
}
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))


//Eraser
var selectedEraser = false

function selectEraser() {
    selectedEraser = selectedEraser === true ? false : true

    if (selectedEraser) {
        ctx.strokeStyle = "#FFFFFF"
        document.getElementById("draw").style.cursor = "url(images/eraser.png),auto"
        document.getElementById("selectedItem").src = "images/eraser-big.png"
    } else {
        ctx.strokeStyle = document.getElementById("base").value
        document.getElementById("draw").style.cursor = "url(images/pen.png),auto"
        document.getElementById("selectedItem").src = "images/pen-big.png"

    }

}

function colorSelect(colorNum) {
    if (!selectedEraser) {
        switch (colorNum) {
            case 1:
                ctx.strokeStyle = "#8a5253"
                break;
            case 2:
                ctx.strokeStyle = "#6f5642"
                break;
            case 3:
                ctx.strokeStyle = "#3e342c"
                break;
            case 4:
                ctx.strokeStyle = "#5d292e"
                break;
            case 5:
                ctx.strokeStyle = "#a31f20"
                break;
            case 6:
                ctx.strokeStyle = "#bc4d23"
                break;
            case 7:
                ctx.strokeStyle = "#dc891c"
                break;
            case 8:
                ctx.strokeStyle = "#f3d302"
                break;
            case 9:
                ctx.strokeStyle = "#92a720"
                break;
            case 10:
                ctx.strokeStyle = "#63b01e"
                break;
            case 11:
                ctx.strokeStyle = "#137937"
                break;
            case 12:
                ctx.strokeStyle = "#01b2dc"
                break;
            case 13:
                ctx.strokeStyle = "#13607e"
                break;
            case 14:
                ctx.strokeStyle = "#142f7e"
                break;
            case 15:
                ctx.strokeStyle = "#3d2869"
                break;
            case 16:
                ctx.strokeStyle = "#5a2769"
                break;
            case 17:
                ctx.strokeStyle = "#992472"
                break;
            case 18:
                ctx.strokeStyle = "#b74095"
                break;
            case 19:
                ctx.strokeStyle = "#7c7c7c"
                break;
            case 20:
                ctx.strokeStyle = "#5a5a5a"
                break;
            case 21:
                ctx.strokeStyle = "#343434"
                break;
            default:
                break;
        }
    }
}
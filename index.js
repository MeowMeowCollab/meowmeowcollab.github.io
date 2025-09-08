let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

function update() {
    let scarab = document.getElementById("scarab");
    x+=dx;
    if (x >= window.innerWidth - scarab.width - 1 || x <= 0) {
        dx = -Math.sign(dx) * (1 + (Math.random() * 0.1));
    }
    y+=dy;
    if (y >= window.innerHeight - scarab.height - 1 || y <= 0) {
        dy = -Math.sign(dy) * (1 + (Math.random() * 0.1));
    }
    scarab.style.left = `${x}px`;
    scarab.style.top = `${y}px`;
}
setInterval(update, 10);
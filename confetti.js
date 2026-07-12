// ==========================
// Simple Confetti Effect
// ==========================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let animation;

// Resize Canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Create Confetti Pieces
function createConfetti() {

    confetti = [];

    for (let i = 0; i < 150; i++) {

        confetti.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 3 + 2,

            color: [
                "#FFD464",
                "#FF5E5E",
                "#E23C64",
                "#B0183D",
                "#FCEDD8"
            ][Math.floor(Math.random() * 5)]

        });

    }

}

// Draw Confetti
function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(piece => {

        ctx.fillStyle = piece.color;

        ctx.fillRect(
            piece.x,
            piece.y,
            piece.size,
            piece.size
        );

        piece.y += piece.speed;

        if (piece.y > canvas.height) {

            piece.y = -20;
            piece.x = Math.random() * canvas.width;

        }

    });

    animation = requestAnimationFrame(drawConfetti);

}

// Start Animation
function startConfetti() {

    createConfetti();

    drawConfetti();

}

// Stop Animation
function stopConfetti() {

    cancelAnimationFrame(animation);

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

}
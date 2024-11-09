const btnRandom = document.querySelector("#random-btn")

function mover(btn)
{
    btn.style.fontWeight = "bolder";
    btn.style.top = "absolute";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnRandom.addEventListener("mouseenter", function (e) {
    mover(e.target)
})
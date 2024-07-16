let coin = document.getElementById("coin");
let level = document.getElementById("levvalu");
let title = document.getElementById("title");
let btn = document.getElementById("btn");
let remove = document.getElementById("removediv");
let card = document.getElementById("card");
let input = document.getElementById("kodvalue")
let yesno = document.getElementById("yesno")
let click = document.getElementById("click")

card.style.display = "none"

let num = localStorage.getItem('score') || 0;
title.textContent = num;

coin.addEventListener("click", function clickcoin(e) {
    num++;
    title.innerHTML = num;
    localStorage.setItem('score', num);
});

if (num > 1000) {
    level.textContent = "Noob"
} if (num > 10000) {
    level.textContent = "Pro"
} if (num > 100000) {
    level.textContent = "Hacker"
}


btn.addEventListener("click", function profunc(e) {
    e.preventDefault();
    remove.remove();
    card.style.display = "block"
})

click.addEventListener("click", function proshib(e) {
    e.preventDefault();
    if (input.value === "0011") {
        yesno.textContent = "Правильно!"
        yesno.style.color = "green"
        yesno.style.fontSize = "20px"
        yesno.style.fontFamily = "Roboto"
        yesno.style.marginTop = "10px"
        localStorage.clear();
    } else {
        yesno.textContent = "Неверный код!"
        yesno.style.color = "red"
        yesno.style.fontSize = "20px"
        yesno.style.fontFamily = "Roboto"
        yesno.style.marginTop = "10px"
    }
})



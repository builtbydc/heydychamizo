let delay = 50;

function nameColor() {
    for(let i = 0; i <= 11; i++) {
        setTimeout(addLetterColor, i*delay, "name-" + i);
    }
}

function addLetterColor(id) {
    document.getElementById(id).classList.add("color");
    setTimeout(removeLetterColor, 2*delay, id);
}

function removeLetterColor(id) {
    document.getElementById(id).classList.remove("color");
}

for(let i = 0; i <= 11; i++) {
    document.getElementById("name-" + i).onclick = nameColor;
}
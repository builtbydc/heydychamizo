let selectedClass = "selected";

let activeSelections = new Map();

let selectionBars = document.querySelectorAll(".selection-bar");
for(let selectionBar of selectionBars) {
    let id = selectionBar.id;
    let options = selectionBar.children[0].children[0].children;
    for(let i = 0; i < options.length; i++){
        options[i].addEventListener("click", () => {
            makeSelection(id, i);
        });
    }

    options[0].classList.add(selectedClass);
    activeSelections.set(id, 0);
}

function makeSelection(id, selectionIndex) {
    let selectionBar = document.querySelector("#" + id);
    let options = selectionBar.children[0].children[0].children;
    options[activeSelections.get(id)].classList.remove(selectedClass);
    options[selectionIndex].classList.add(selectedClass);
    activeSelections.set(id, selectionIndex);
}
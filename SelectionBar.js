class SelectionBar {
    constructor(tableElement) {
        // table -> tbody -> tr -> td (list)
        this.options = tableElement.children[0].children[0].children;
        for(let i = 0; i < this.options.length; i++)
            this.options[i].addEventListener("click", () => {
                this.makeSelection(i)
                displayContent();
            });
        this.makeSelection(0);
    }
    makeSelection(selectedIndex) {
        if(this.activeIndex !== undefined) 
            this.options[this.activeIndex].classList.remove("SELECTED");
        this.activeIndex = selectedIndex;
        this.options[this.activeIndex].classList.add("SELECTED");
    }

    // static methods
    static map = new Map();
    static initialize() {
        let tableElements = document.querySelectorAll(".selection-bar");
        for(let tableElement of tableElements)
            SelectionBar.map.set(tableElement.id, new SelectionBar(tableElement));
    }

    // most used
    static activeIndexOfId(id) {
        return SelectionBar.map.get(id).activeIndex;
    }
} 

SelectionBar.initialize();

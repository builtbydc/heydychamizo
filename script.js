function refreshContent() {
    let category = SelectionBar.activeIndexOfId("category");
    let network = SelectionBar.activeIndexOfId("network");
    
    document.getElementById("first").children[1].innerHTML = 
            "category: " + category + " network: " + network;
}
refreshContent();
let category = 0;
let network = 0;

function h3(content) {
    return "<h3>" + content + "</h3>";
}

function p(content) {
    return "<p>" + content + "</p>";
}

function video(source) {
    return "<video width='320' height='240' controls>" + 
                "<source src='" + source + "' type='video/mp4'>" + 
            "</video>";
}

function section(id, content) {
    return "<section id='" + id + "'>" +
                content +
            "</section>";
}

let types = new Map();
types.set("instagram", ["Stories", "Posts", "Reels"]);

function buildContent(category, network) {
    let content = "";
    switch(network) {
        case 0: //instagram
            for(let type of types.get("instagram")) {
                content += section("instagram" + type, 
                    h3(type) +
                    video("./content/sale/instagram/stories.mp4")
                )
            }
            break;
    }

    return content
}

function refreshContent() {
    category = SelectionBar.activeIndexOfId("category");
    network = SelectionBar.activeIndexOfId("network");
    
    document.getElementById("content").innerHTML = 
            buildContent(category, network);
}
refreshContent();

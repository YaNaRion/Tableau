var hasTools = [{ nom: "Outil numero 1 avec peu de visites", id: "asd12", visites: 1, entregistrements: 123, partages: 123, suivis: 123, credibilite: 123, efficacite: 123, note: 123 },
    { nom: "Outil numero 2", id: "af2jhkhb", visites: 223, entregistrements: 223, partages: 223, suivis: 223, credibilite: 2213, efficacite: 223, note: 223 },
    { nom: "Outil numero 3 fait par mr. X", id: "bfd97632gr", visites: 323, entregistrements: 323, partages: 323, suivis: 323, credibilite: 323, efficacite: 323, note: 1323 },
    { nom: "Outil numero 4 pas de valeurs pour suivis", id: "345467fg", visites: 424, enregistrements: 432, partages: 432, credibilite: 421, efficacite: 412, notes: 412 },
    { nom: "Prochain outil", id: "gs54gf", visites: 5, entregistrements: 523, partages: 523, suivis: 523, credibilite: 523, efficacite: 523, note: 523 },
    { nom: "Outil 6", id: "gfsdg54hdf", visites: 62, entregistrements: 623, partages: 623, suivis: 623, credibilite: 623, efficacite: 623, note: 623 },
    { nom: "Dernier outils avec beaucoup de visites et un long titre", id: "fcafasdr32", visites: 105923, entregistrements: 723, partages: 723, suivis: 723, credibilite: 723, efficacite: 723, note: 723 }];
// window.addEventListener('load', populateTab.bind(this));
window.onload = function () {
    var url = window.location.href;
    var segmentUrl = url.split('/');
    var dernierSegmentUrl = segmentUrl[segmentUrl.length - 1];
    console.log(dernierSegmentUrl);
    if (dernierSegmentUrl === "tool.html") {
        populateTab();
        console.log(window.location);
        var goHomeB = document.getElementById("go_home_button");
        console.log(goHomeB);
        goHomeB.addEventListener('click', function (event) { return goHome(); });
    }
    else if (dernierSegmentUrl === "home.html") {
        var goToolB = document.getElementById("go_tool_button");
        console.log(goToolB);
        goToolB.addEventListener('click', function (event) { return seeTool(); });
    }
};
function seeTool() {
    window.location.href = "./tool.html";
}
function goHome() {
    window.location.href = "./home.html";
}
function populateTab() {
    var conteneur = document.getElementById("conteneurTab");
    for (var i = 0; i < 7; i++) {
        var nouvLigne = document.createElement("ul");
        nouvLigne.classList.add("tableau");
        var tabNouvDiv = [];
        for (var j = 0; j < 8; j++) {
            var text = void 0;
            if (j === 0)
                text = hasTools[i].nom;
            else if (j === 1)
                text = hasTools[i].id;
            else if (j === 2)
                text = hasTools[i].visites;
            else if (j === 3)
                text = hasTools[i].entregistrements;
            else if (j === 4)
                text = hasTools[i].partages;
            else if (j === 5)
                text = hasTools[i].suivis;
            else if (j === 6)
                text = hasTools[i].credibilite;
            else if (j === 7)
                text = hasTools[i].efficacite;
            else if (j === 8)
                text = hasTools[i].note;
            var nouvDiv = document.createElement("div");
            nouvDiv.className = "elementTableau";
            nouvDiv.textContent = text;
            tabNouvDiv.push(nouvDiv);
            nouvLigne.appendChild(nouvDiv);
        }
        conteneur === null || conteneur === void 0 ? void 0 : conteneur.appendChild(nouvLigne);
    }
}

let hasTools = [{nom:"Outil numero 1 avec peu de visites", id:"asd12", visites: 1, entregistrements:123, partages:123, suivis:123, credibilite:123,efficacite:123,note:123},
                      {nom:"Outil numero 2", id:"af2jhkhb", visites: 223, entregistrements:223, partages:223, suivis:223, credibilite:2213,efficacite:223,note:223},
                      {nom:"Outil numero 3 fait par mr. X", id:"bfd97632gr",visites: 323, entregistrements:323, partages:323, suivis:323, credibilite:323,efficacite:323,note:1323},
                      {nom:"Outil numero 4 pas de valeurs pour suivis", id:"345467fg",visites:424, enregistrements:432, partages:432, credibilite:421, efficacite:412, notes:412},
                      {nom:"Prochain outil", id:"gs54gf",visites: 5, entregistrements:523, partages:523, suivis:523, credibilite:523,efficacite:523,note:523},
                      {nom: "Outil 6", id:"gfsdg54hdf",visites: 62, entregistrements:623, partages:623, suivis:623, credibilite:623,efficacite:623,note:623},
                      {nom:"Dernier outils avec beaucoup de visites et un long titre", id:"fcafasdr32", visites: 105923, entregistrements:723, partages:723, suivis:723, credibilite:723,efficacite:723,note:723}]

window.addEventListener('load', this.populateTab.bind(this))
/*
function seeTool(id: any) {
    this.router.navigate(['/tool', 'single-tool', { toolID: id }])
  }

function  goHome(){
    this.router.navigate(['/home'])
  }
*/
function populateTab() {
  const conteneur = document.getElementById("conteneurTab");
  for (let i = 0; 7 < i; i++) {
    let nouvLigne = document.createElement("ul");
    nouvLigne.classList.add("tableau");
    let tabNouvDiv:HTMLDivElement[] = [];
    for (let j = 0; j < 9; j++) {
      let text;
      if (j === 0)
        text = this.hasTools[j].nom;
      else if (j === 1)
        text = this.hasTools[j].id;
      else if (j === 2)
        text = this.hasTools[j].visites;
      else if (j === 3)
        text = this.hasTools[j].entregistrements;
      else if (j === 4)
        text = this.hasTools[j].partages;
      else if (j === 5)
        text = this.hasTools[j].suivis;
      else if (j === 6)
        text = this.hasTools[j].credibilite;
      else if (j === 7)
        text = this.hasTools[j].efficacite;
      else if (j === 8)
        text = this.hasTools[j].note;
      let nouvDiv = document.createElement("div");
      nouvDiv.textContent = text;
      tabNouvDiv.push(nouvDiv);
      nouvLigne.appendChild(nouvDiv);
    }
    conteneur?.appendChild(nouvLigne);
  }
}



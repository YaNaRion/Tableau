export class ToolsStatPage {
  constructor(router) {
      this.router = router;
      this.hasTools = [{ nom: "Outil numéro 1 avec peu de visites", id: "asd12", visites: 1, entregistrements: 123, partages: 123, suivis: 123, crédibilité: 123, efficacité: 123, note: 123 },
          { nom: "Outil numéro 2", id: "af2jhkhb", visites: 223, entregistrements: 223, partages: 223, suivis: 223, crédibilité: 2213, efficacité: 223, note: 223 },
          { nom: "Outil numéro 3 fait par mr. X", id: "bfd97632gr", visites: 323, entregistrements: 323, partages: 323, suivis: 323, crédibilité: 323, efficacité: 323, note: 1323 },
          { nom: "Outil numéro 4 pas de valeurs pour suivis", id: "345467fg", visites: 424, enregistrements: 432, partages: 432, crédibilité: 421, efficacité: 412, notes: 412 },
          { nom: "Prochain outil", id: "gs54gf", visites: 5, entregistrements: 523, partages: 523, suivis: 523, crédibilité: 523, efficacité: 523, note: 523 },
          { nom: "Outil 6", id: "gfsdg54hdf", visites: 62, entregistrements: 623, partages: 623, suivis: 623, crédibilité: 623, efficacité: 623, note: 623 },
          { nom: "Dernier outils avec beaucoup de visites et un long titre", id: "fcafasdr32", visites: 105923, entregistrements: 723, partages: 723, suivis: 723, crédibilité: 723, efficacité: 723, note: 723 }];
      window.addEventListener('load', this.populateTab.bind(this));
  }
  seeTool(id) {
      this.router.navigate(['/tool', 'single-tool', { toolID: id }]);
  }
  goHome() {
      this.router.navigate(['/home']);
  }
  populateTab() {
      const conteneur = document.getElementById("conteneurTab");
      for (let i = 0; this.hasTools.lenght > i; i++) {
          let nouvLigne = document.createElement("lu");
          nouvLigne.classList.add("tableau");
          let tabNouvDiv = [];
          for (let j = 0; i < 9; j++) {
              let text;
              if (j === 0)
                  text = this.hasTools[i].nom;
              else if (j === 1)
                  text = this.hasTools[i].id;
              else if (j === 2)
                  text = this.hasTools[i].visites;
              else if (j === 3)
                  text = this.hasTools[i].entregistrements;
              else if (j === 4)
                  text = this.hasTools[i].partages;
              else if (j === 5)
                  text = this.hasTools[i].suivis;
              else if (j === 6)
                  text = this.hasTools[i].crédibilité;
              else if (j === 7)
                  text = this.hasTools[i].efficacité;
              else if (j === 8)
                  text = this.hasTools[i].note;
              let nouvDiv = document.createElement("div");
              nouvDiv.textContent = text;
              tabNouvDiv.push(nouvDiv);
              nouvLigne.appendChild(nouvDiv);
          }
          conteneur === null || conteneur === void 0 ? void 0 : conteneur.appendChild(nouvLigne);
      }
  }
}


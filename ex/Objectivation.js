
const tv = {
    nom: "tv",
    prix: 500,
    quantité: 10
}
let inventaire = [
    { nom: "Télévision", prix: 500, quantité: 10 },
    { nom: "Ordinateur", prix: 1000, quantité: 5 },
    { nom: "Tablette", prix: 300, quantité: 20 }
];

function ajouterArticle(nom, prix, quantité) {
    inventaire.push({ nom, prix, quantité })
}

function afficherInventaire() {
    inventaire.forEach(article => {

        console.log(`Nom : ${article.nom}, Prix : ${article.prix}, Quantité : ${article.quantité}`);

    })
}

function mettreAJourQuantité(articleName, quantiy) {
    inventaire.find((article) => article.nom == articleName )
}

// Tester les fonctions

ajouterArticle("Smartphone", 700, 15);
afficherInventaire();
// mettreAJourQuantité("Télévision", 8);
// supprimerArticle("Ordinateur");
// afficherInventaire();
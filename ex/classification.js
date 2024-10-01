import Inventaire from './classes/Inventaire.js';
import Article from './classes/Article.js';


// Créer l'inventaire
const inventaire = new Inventaire();

// Créer des articles
const article1 = new Article(1,"Télévision", 500, 10);
const article2 = new Article(2,"Ordinateur", 1000, 5);
const article3 = new Article(3,"Tablette", 300, 20);

inventaire.ajouterArticle(article1);
inventaire.ajouterArticle(article2);
inventaire.ajouterArticle(article3);

inventaire.afficherInventaire()

inventaire.majQuantité(1, 10)
inventaire.trouverArticle(1)
// inventaire.retirerArticle(1)

//  inventaire.afficherInventaire()
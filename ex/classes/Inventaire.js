export default class Inventaire {
    constructor() {
        this.articles = []
    }

    ajouterArticle(article) {
        this.articles.push(article)
    }


    afficherInventaire() {
        this.articles.forEach((article) => {
            console.log(`Id : ${article.id}  \n Nom : ${article.nom}, \n Prix : ${article.prix}, \n Quantité : ${article.quantité}`);


        })
    }

    trouverArticle(id) {
        return   this.articles.find(article => article.id === id)
            

    }


    majQuantité(id, nouvelleQuantité) {
        const articletpUpdate = this.trouverArticle(id)
        articletpUpdate.quantité += nouvelleQuantité
        console.log(`article ${articletpUpdate.nom} a été mis a jour`)
    }

}
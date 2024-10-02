


function generateCampagne(nom_diffusion, contenu_sms, diffusion) {

    const data = {
        status: "Success",
        code: "201",
        data: {
            nom_diffusion,
            nom_campagne: "Promo Pneus 2024",
            contenu_sms,
            statut_campagne : "Planifiée",
            diffusion
        },
    }
    return data
}



const diffusion = {
    
    date_creation: (new Date()).toLocaleDateString(),
    date_envois: {
        vagues: [
            {
                date: "02/10/2024",
                nombre: "1500"
            },
            {
                date: "12/10/2024",
                nombre: "2500"
            }
        ]

    }
}
console.log(generateCampagne('garage du pont', "bonjour , le gargae vous invite a la promo pneu 2024", diffusion));

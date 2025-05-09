// Definizione degli oggetti animali
const animale1 = {
    specie: "Mucca",
    razza: "Chianina",
    zampe: 4
};

const animale2 = {
    specie: "Cane",
    razza: "Bassotto",
    zampe: 4
};

const animale3 = {
    specie: "Gallina",
    razza: "Andalusa",
    zampe: 2
};

// Funzione per mostrare i dettagli nel paragrafo <p id="info">
function mostraDettagli(animale) {
    document.getElementById("info").innerHTML = 
        `Specie: ${animale.specie}, Razza: ${animale.razza}, Zampe: ${animale.zampe}`;
}

// Attendere il caricamento della pagina e poi aggiungere gli event listener
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("a").addEventListener("click", () => mostraDettagli(animale1));
    document.getElementById("b").addEventListener("click", () => mostraDettagli(animale2));
    document.getElementById("c").addEventListener("click", () => mostraDettagli(animale3));
});

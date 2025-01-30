// Definizione degli oggetti animali
const gallina = {
    specie: "gallina",
    razza: "Moroseta",
    zampe: 2
};

const maiale = {
    specie: "maiale",
    razza: "Kunekune",
    zampe: 4
};

const mucca = {
    specie: "mucca",
    razza: "Beefalo",
    zampe: 4
};

// Scrittura dei dati negli elementi HTML corrispondenti
document.getElementById("c").innerHTML = `Specie: ${gallina.specie}, Razza: ${gallina.razza}, Zampe: ${gallina.zampe}`;
document.getElementById("b").innerHTML = `Specie: ${maiale.specie}, Razza: ${maiale.razza}, Zampe: ${maiale.zampe}`;
document.getElementById("a").innerHTML = `Specie: ${gallina.specie}, Razza: ${gallina.razza}, Zampe: ${gallina.zampe}`;
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


if (document.getElementById("gallina")) {
    document.getElementById("gallina").innerHTML = 
        `Specie: ${gallina.specie}, Razza: ${gallina.razza}, Zampe: ${gallina.zampe}`;
}

if (document.getElementById("maiale")) {
    document.getElementById("maiale").innerHTML = 
        `Specie: ${maiale.specie}, Razza: ${maiale.razza}, Zampe: ${maiale.zampe}`;
}

if (document.getElementById("mucca")) {
    document.getElementById("mucca").innerHTML = 
        `Specie: ${mucca.specie}, Razza: ${mucca.razza}, Zampe: ${mucca.zampe}`;
}



function playSound(event, soundFile) {
    event.preventDefault();
    let audio = new Audio(soundFile);
    audio.play();
    
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 2000);
}

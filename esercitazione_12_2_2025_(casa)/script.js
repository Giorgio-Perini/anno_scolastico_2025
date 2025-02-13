const Artisti = [
    {
        Nome: "Vasco",
        Cognome: "Rossi",
        Biografia: "è un cantautore italiano.",
        Playlist: [
            {
                Titolo: "Gli Angeli",
                Immagine_disco: "image/gli_angeli.png",
                Informazioni: "Informazioni sulla canzone Gli Angeli Live 2024",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/wA86bfTO7Sw"
            },
            {
                Titolo: "Albachiara",
                Immagine_disco: "image/albachiara.png",
                Informazioni: "Informazioni sulla canzone Albachiara",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/Ij-u6GTU1zQ"
            }
        ]
    },
    {
        Nome: "Billie",
        Cognome: "Eilish",
        Biografia: "è una cantautrice statunitense",
        Playlist: [
            {
                Titolo: "Bad Guy",
                Immagine_disco: "image/bad_guy.png",
                Informazioni: "Informazioni sulla canzone Bad Guy",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/DyDfgMOUjCI"
            },
            {
                Titolo: "Skinny Love",
                Immagine_disco: "image/bon_iver.png",
                Informazioni: "Informazioni sulla canzone Skinny Love",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/aNzCDt2eidg"
            }
        ]
    },
    {
        Nome: "Tiziano",
        Cognome: "Ferro",
        Biografia: "è un cantautore italiano",
        Playlist: [
            {
                Titolo: "Ti Scatterò una Foto",
                Immagine_disco: "image/ti_scattero_una_foto.png",
                Informazioni: "Informazioni sulla canzone Ti Scatterò una Foto",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/_Yn7jjhM_lU"
            },
            {
                Titolo: "Sere Nere",
                Immagine_disco: "image/X_O.png",
                Informazioni: "Informazioni sulla canzone Sere Nere",
                Audio: "audio/canzone.mp3",
                Link: "https://www.youtube.com/embed/Ga9sIlmVh50"
            }
        ]
    }
];




const mioTesto = `
<h1>${Artisti[0].Nome} ${Artisti[0].Cognome}</h1>
<p>${Artisti[0].Biografia}</p>
<hr>
<h2>${Artisti[0].Playlist[0].Titolo}</h2>
<img src="${Artisti[0].Playlist[0].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton1">Info</button>
</div>
<p class = info1></p>
<button id="playButton1">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[0].Playlist[0].Link}" 
    title="${Artisti[0].Playlist[0].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 160px; left: 550px;">
</iframe>
<hr>
<h2>${Artisti[0].Playlist[1].Titolo}</h2>
<img src="${Artisti[0].Playlist[1].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton2">Info</button>
</div>
<p class = info2></p>
<button id="playButton2">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[0].Playlist[1].Link}" 
    title="${Artisti[0].Playlist[1].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 520px; left: 550px;">
</iframe>
<hr>
<h1>${Artisti[1].Nome} ${Artisti[1].Cognome}</h1>
<p>${Artisti[1].Biografia}</p>
<hr>
<h2>${Artisti[1].Playlist[0].Titolo}</h2>
<img src="${Artisti[1].Playlist[0].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton3">Info</button>
</div>
<p class = info3></p>
<button id="playButton3">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[1].Playlist[0].Link}" 
    title="${Artisti[1].Playlist[0].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 1000px; left: 550px;">
</iframe>
<hr>
<h2>${Artisti[1].Playlist[1].Titolo}</h2>
<img src="${Artisti[1].Playlist[1].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton4">Info</button>
</div>
<p class = info4></p>
<button id="playButton4">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[1].Playlist[1].Link}" 
    title="${Artisti[1].Playlist[1].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 1370px; left: 550px;">
</iframe>
<hr>
<h1>${Artisti[2].Nome} ${Artisti[1].Cognome}</h1>
<p>${Artisti[2].Biografia}</p>
<hr>
<h2>${Artisti[2].Playlist[0].Titolo}</h2>
<img src="${Artisti[2].Playlist[0].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton5">Info</button>
</div>
<p class = info5></p>
<button id="playButton5">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[2].Playlist[0].Link}" 
    title="${Artisti[2].Playlist[0].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 1830px; left: 550px;">
</iframe>
<hr>
<h2>${Artisti[2].Playlist[1].Titolo}</h2>
<img src="${Artisti[2].Playlist[1].Immagine_disco}" alt="Immagine del disco Gli Angeli" style="width: 200px; height: auto;">
<div>
<button id="infoButton6">Info</button>
</div>
<p class = info6></p>
<button id="playButton6">Start</button>
<iframe width="400" height="300" 
    src="${Artisti[2].Playlist[1].Link}" 
    title="${Artisti[2].Playlist[1].Titolo}" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
    style="position: absolute; top: 2200px; left: 550px;">
</iframe>
<hr>
`;



const appDiv = document.getElementById('app');
appDiv.innerHTML = mioTesto;

let currentAudio = null;  // Variabile per tracciare l'audio corrente
let currentButton = null;  // Variabile per tracciare il pulsante corrente

// Funzione per mostrare o nascondere le informazioni
function mostraInformazioni(buttonId, infoClass, informazioni) {
    const button = document.getElementById(buttonId);
    const infoParagraph = document.querySelector(`.${infoClass}`);
    
    button.addEventListener('click', () => {
        if (infoParagraph.innerHTML === "") {
            infoParagraph.innerHTML = informazioni;
        } else {
            infoParagraph.innerHTML = "";  // Nasconde le informazioni se sono già visibili
        }
    });
}

// Funzione per gestire la riproduzione dell'audio
function gestisciAudio(buttonId, audioSrc) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentButton) currentButton.textContent = "Start"; // Resetta il testo del pulsante precedente
        }

        if (currentAudio && currentAudio.src === new Audio(audioSrc).src) {
            currentAudio = null;
            currentButton = null;
            return;  // Se si preme lo stesso pulsante, l'audio viene fermato e non viene riprodotto di nuovo
        }

        currentAudio = new Audio(audioSrc);
        currentAudio.play();
        button.textContent = "Stop";
        currentButton = button;

        currentAudio.onended = () => {
            button.textContent = "Start";
            currentAudio = null;
            currentButton = null;
        };
    });
}

// Cicli per aggiungere gli eventi
for (let i = 0; i < Artisti.length; i++) {
    for (let j = 0; j < Artisti[i].Playlist.length; j++) {
        const playButtonId = `playButton${i * 2 + j + 1}`;
        const infoButtonId = `infoButton${i * 2 + j + 1}`;
        const infoClass = `info${i * 2 + j + 1}`;
        
        gestisciAudio(playButtonId, Artisti[i].Playlist[j].Audio);
        mostraInformazioni(infoButtonId, infoClass, Artisti[i].Playlist[j].Informazioni);
    }
}



// Funzione per mostrare l'immagine in un popup
function mostraPopupImmagine(immagineSrc) {
    // Creazione del contenitore per il popup
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '1000';

    // Creazione dell'immagine ingrandita
    const img = document.createElement('img');
    img.src = immagineSrc;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    img.style.border = '2px solid white';
    img.style.borderRadius = '10px';
    
    // Pulsante per chiudere il popup
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Chiudi';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';

    // Aggiunta degli elementi al popup
    popup.appendChild(img);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);

    // Eventi per chiudere il popup
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup);
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}

// Aggiunta dell'evento click alle immagini
const immagini = document.querySelectorAll('img');
immagini.forEach((img) => {
    img.addEventListener('click', () => {
        mostraPopupImmagine(img.src);
    });
});

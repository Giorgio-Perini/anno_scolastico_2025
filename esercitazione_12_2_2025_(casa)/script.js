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
                Audio: "audio/Gli_Angeli_Live_2024.mp3",
                Link: "https://www.youtube.com/embed/wA86bfTO7Sw"
            },
            {
                Titolo: "Albachiara",
                Immagine_disco: "image/albachiara.png",
                Informazioni: "Informazioni sulla canzone Albachiara",
                Audio: "audio/Albachiara.mp3",
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
                Audio: "audio/Bad_Guy.mp3",
                Link: "https://www.youtube.com/embed/DyDfgMOUjCI"
            },
            {
                Titolo: "Skinny Love",
                Immagine_disco: "image/bon_iver.png",
                Informazioni: "Informazioni sulla canzone Skinny Love",
                Audio: "audio/Skinny_Love.mp3",
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
                Audio: "audio/Ti_Scattero_Una_Foto.mp3",
                Link: "https://www.youtube.com/embed/_Yn7jjhM_lU"
            },
            {
                Titolo: "Sere Nere",
                Immagine_disco: "image/X_O.png",
                Informazioni: "Informazioni sulla canzone Sere Nere",
                Audio: "audio/Sere_Nere.mp3",
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
<p>${Artisti[0].Playlist[0].Informazioni}</p>
<button id="playButton">Start</button>
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
<p>${Artisti[0].Playlist[1].Informazioni}</p>
<button id="playButton">Start</button>
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
<p>${Artisti[1].Playlist[0].Informazioni}</p>
<button id="playButton">Start</button>
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
<p>${Artisti[1].Playlist[1].Informazioni}</p>
<button id="playButton">Start</button>
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
<p>${Artisti[2].Playlist[0].Informazioni}</p>
<button id="playButton">Start</button>
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
<p>${Artisti[2].Playlist[1].Informazioni}</p>
<button id="playButton">Start</button>
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

// Inserimento del testo nel div con id "app"
const appDiv = document.getElementById('app');
appDiv.innerHTML = mioTesto;

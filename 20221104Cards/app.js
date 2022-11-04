// let i=0;
// while(i<5){
let text = "";
const data[{titulo = "titulo1",
            parrafo = "parrafo1" }
        ];

data.forEach(myFunction);

const cards = document.getElementById('cards').innerHTML=text;

function myFunction(repite){
    const imagen = document.createElement("img")
    const div_body = document.createElement("div")
    const titulo = document.createElement("h5")
    const parrafo = document.createElement("p")
    const boton = document.createElement("b")
    
    titulo.textContent = "Titulo"
    parrafo.textContent = "este es texto para el parrafo"
    boton.textContent = "Pulse"
    
    imagen.setAttribute('src', 'img_avatar3.png')
    div_body.setAttribute('class', "card-body text-center")
    titulo.setAttribute('class', 'card-title text-center')
    parrafo.setAttribute('class', 'card-text p-4')
    boton.setAttribute('class', "btn btn-primary")
    
    cards.appendChild(imagen)
    cards.appendChild(div_body)
    div_body.appendChild(titulo)
    div_body.appendChild(parrafo)
    div_body.appendChild(boton)
  // text+=repite;
}
//i++ }

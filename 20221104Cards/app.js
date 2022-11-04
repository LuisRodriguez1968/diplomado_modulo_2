const 

const cards = document.getElementById('cards')
const imagen = document.createElement("img")
const div_body = document.createElement("div")
const titulo = document.createElement("h5")
const parrafo = document.createElement("p")
const boton = document.createElement("b")

titulo.textContent = "Titulo de la tarjeta"
parrafo.textContent = "este es texto para el parrafo"
boton.textContent = "Pulse aqui"

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
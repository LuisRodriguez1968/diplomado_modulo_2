let nCards =
[
   {
       "title": "Card 1",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   },
   {
       "title": "Card 2",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   },
   {
       "title": "Card 3",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   },
   {
       "title": "Card 4",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   },
   {
       "title": "Card 5",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   },
   {
       "title": "Card 6",
       "content": "Este es el texto que debe observarse en el card-text",
       "buton": "Pulsame"
   }
  ]

   nCards.forEach(elemento => createCard(elemento.Card));

   const cards=document.getElementById('cards')
   cards.setAttribute('class',"card")
 
   const createCard = (elemento) => {
      const fragment = document.createDocumentFragment();

      const ppal=document.createElement("div")
      const cuerpo=document.createElement("div")
      const titulo=document.createElement("h5")
      titulo.textContent="Titulo de la tarjeta"
      const parrafo=document.createElement("p")
      parrafo.textContent="este es texto para el parrafo"
      const boton=document.createElement("b")
      boton.textContent="este es boton"
      const imagen=document.createElement("img")
       
      ppal.setAttribute('class',"card")
      cuerpo.setAttribute('class',"card-body")
      imagen.setAttribute('src','cards.jpg','class','card-img-top')
      titulo.setAttribute('class','card-title text-center')
      parrafo.setAttribute('class','card-text p-4')
      boton.setAttribute('class',"btn btn-primary")
      
      ppal.appendChild(imagen)
      ppal.appendChild(cuerpo)
      cuerpo.appendChild(titulo)
      cuerpo.appendChild(parrafo)
      cuerpo.appendChild(boton)
      fragment.appendChild(ppal)
      cards.appendChild(fragment)
   }
   createCard();

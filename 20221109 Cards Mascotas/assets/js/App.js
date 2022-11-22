let nCards =
[
   {
       "title": "1 Adopta",
       "jpg": "./assets/img/cat4.jpg",
       "content": "Te invitamos a nuestras jornadas de adopción o visita la fundación para que conozcas a tu alma gemela. Todos nuestros peludos son entregados en óptimas condiciones de salud a adoptantes responsables que se comprometan a cuidarlos por el resto de sus vidas.",
       "button": "Pulsame"
   },
   {
       "title": "2 Apadrina",
       "jpg": "./assets/img/dog3.jpg",
       "content": "Puedes apadrinar alguno de nuestros peludos para que su estadía en nuestro refugio sea óptima. Manejamos diferentes planes de padrinos en los que puedes hacer un aporte mensual. Si estás interesado en apadrinar un Tepiano contáctanos y te daremos más detalles.t",
       "button": "Pulsame"
   },
   {
       "title": "3 Dona",
       "jpg": "./assets/img/dog7.jpg",
       "content": "Puedes donar desde alimentos y medicinas hasta cobijas o tejas para la adecuación del refugio. También puedes compartir tiempo con los peluditos, ayudarnos en la fundación o hacer donaciones en dinero.",
       "button": "Pulsame"
   },
   {
       "title": "4 Difunde",
       "jpg": "./assets/img/cat5.jpg",
       "content": "Comparte, participa y apoya las jornadas de adopción y nuestros eventos como caminatas y jornadas de baño. Ayúdanos a promover las jornadas de esterilización gratuitas o de bajo costo que compartimos en nuestras redes.t",
       "button": "Pulsame"
   }
  ]

   const row = document.getElementById('id_cards')

   const createCard = (elemento) => {
      const fragmento = document.createDocumentFragment();
      const columna=document.createElement("div")
      const ppal=document.createElement("div")
      const cuerpo=document.createElement("div")
      const titulo=document.createElement("h5")
      titulo.textContent=elemento.title   
      const parrafo=document.createElement("p")
      parrafo.textContent=elemento.content
      const boton=document.createElement("b")
      boton.textContent=elemento.button
      const imagen=document.createElement("img")
//      imagen.src=elemento.jpg
    imagen.setAttribute("src", elemento.jpg)
      columna.setAttribute('class',' col-sm-12 col-md-3 col-lg-3 col-xl-3','style',"width: 16rem")   
      ppal.setAttribute('class',"card")
      cuerpo.setAttribute('class',"card-body")
      imagen.setAttribute('class',"card-img-top",'style',"width: 16rem")
      titulo.setAttribute('class','card-title text-center')
      parrafo.setAttribute('class','card-text p-4')
      boton.setAttribute('class',"btn btn-primary")
      
      ppal.appendChild(imagen)
      ppal.appendChild(cuerpo)
      cuerpo.appendChild(titulo)
      cuerpo.appendChild(parrafo)
      cuerpo.appendChild(boton)
      columna.appendChild(ppal)
      fragmento.appendChild(columna)
      row.appendChild(fragmento)
   }
   nCards.forEach(elemento => createCard(elemento));
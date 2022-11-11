let nCards =
[
   {
       "title": "Adopta",
       "content": "Te invitamos a nuestras jornadas de adopción o visita la fundación para que conozcas a tu alma gemela. Todos nuestros peludos son entregados en óptimas condiciones de salud a adoptantes responsables que se comprometan a cuidarlos por el resto de sus vidas..",
       "button": "Pulsame"
   },
   {
       "title": "Apadrina",
       "content": "Puedes apadrinar alguno de nuestros peludos para que su estadía en nuestro refugio sea óptima. Manejamos diferentes planes de padrinos en los que puedes hacer un aporte mensual. Si estás interesado en apadrinar un Tepiano contáctanos y te daremos más detalles.",
       "button": "Pulsame"
   },
   {
       "title": "Dona",
       "content": "Puedes donar desde alimentos y medicinas hasta cobijas o tejas para la adecuación del refugio. También puedes compartir tiempo con los peluditos, ayudarnos en la fundación o hacer donaciones en dinero.",
       "button": "Pulsame"
   },
   {
       "title": "Difunde",
       "content": "Comparte, participa y apoya las jornadas de adopción y nuestros eventos como caminatas y jornadas de baño. Ayúdanos a promover las jornadas de esterilización gratuitas o de bajo costo que compartimos en nuestras redes.",
       "button": "Pulsame"
   }
  ]

   const cards=document.getElementById('id_cards')
   cards.setAttribute('class',"card")
 
   const createCard = (elemento) => {
      const fragmento = document.createDocumentFragment();

      const ppal=document.createElement("div")
      const cuerpo=document.createElement("div")
      const titulo=document.createElement("h5")
      titulo.textContent=elemento.title   
      const parrafo=document.createElement("p")
      parrafo.textContent=elemento.content
      const boton=document.createElement("b")
      boton.textContent=elemento.button
      const imagen=document.createElement("img")
       
//      ppal.setAttribute('class',"card")
      ppal.setAttribute('class',"card col-sm-12 col-md-3 col-lg-3 col-xl-3 ",'style',"width: 18rem;")
//      <div class="card col-sm-12 col-md-3 col-lg-3 col-xl-3 " style="width: 18rem;">
      cuerpo.setAttribute('class',"card-body")

      imagen.setAttribute('src','cards.jpg','class','card-img-top')
//      titulo.setAttribute('class', 'card-title text-center')
      titulo.setAttribute('class', '"cambios col-sm-6 col-md-12 col-lg-12 col-xl-12"')
//      <h3 class="cambios col-sm-6 col-md-12 col-lg-12 col-xl-12">Haz parte del cambio</h3>
      parrafo.setAttribute('class','card-text p-4')
      boton.setAttribute('class',"btn btn-primary")
      
      ppal.appendChild(imagen)
      ppal.appendChild(cuerpo)
      cuerpo.appendChild(titulo)
      cuerpo.appendChild(parrafo)
      cuerpo.appendChild(boton)
      fragmento.appendChild(ppal)
      cards.appendChild(fragmento)
   }
   nCards.forEach(elemento => createCard(elemento));
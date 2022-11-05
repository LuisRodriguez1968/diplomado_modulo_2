// const lista = document.getElementById('lista')
// const arrayItem = ['primer','segundo','tercero']
// const fragment = document.createDocumentFragment()
// arrayItem.forEach(item=>{
// const li = document.createElement('li')
// li.textContent = item
// fragment.appendChild(li)
// console.log(fragment)
// })
// lista.appendChild(fragment)

 function fcard(value){
    let i=0
    while(i<value){ 
           const cards=document.getElementById('cards')
    console.log(cards)
    const div_body=document.createElement("div")
    const titulo=document.createElement("h5")
    titulo.textContent="Titulo de la tarjeta"
    const parrafo=document.createElement("p")
    parrafo.textContent="este es texto para el parrafo"
    const boton=document.createElement("b")
    boton.textContent="este es boton"
    const imagen=document.createElement("img")
    imagen.setAttribute('src','cards.jpg','class','card-img-top')
    div_body.setAttribute('class',"card-body")
    titulo.setAttribute('class','card-title text-center')
    parrafo.setAttribute('class','card-text p-4')
    boton.setAttribute('class',"btn btn-primary")
    cards.appendChild(imagen)
    cards.appendChild(div_body)
    div_body.appendChild(titulo)
    div_body.appendChild(parrafo)
    div_body.appendChild(boton)
    i++}
    
 }
 fcard(5)
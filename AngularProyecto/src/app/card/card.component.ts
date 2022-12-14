import { Component } from '@angular/core';
import { RickandmortyService } from '../service/rickandmorty.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  nueva: any = {  
    title: "Titulo de Card Title",
    text: "Some quick example text to build on the card title\ and make up the bulk of the card's content.",
    button: "Text Button",
    jpg: "./../../assets/dog4.jpg"
  }
  
  locationInfo: any 
  residentsInfo: any

  constructor(private RaMServ:RickandmortyService) {}

  getLocation(numero: string | number){
    const observ = this.RaMServ.location(numero)
    observ.subscribe(
      response => {
        this.locationInfo = response
        console.log(response)
      },
      error => console.log(error)
    )
  }



  getResidents(elemento: string | number){
    const observ1 = this.RaMServ.residents(elemento)
    observ1.subscribe(
      response1 => {
        this.residentsInfo = response1
        console.log(response1)
      },
      error => console.log(error)
    )
  }




  


}

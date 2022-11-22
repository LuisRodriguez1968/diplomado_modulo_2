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
  characterInfo: any 
  
  constructor(private RaMServ:RickandmortyService) {}

  getCharacter(numero: string | number){
    const observ = this.RaMServ.character(numero)
    observ.subscribe(
      response => {
        this.characterInfo = response
        console.log(response)
      },
      error => console.log(error)
    )
  }
}

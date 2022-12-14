import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  url: string = "https://rickandmortyapi.com/api/location/" 
  constructor(private client: HttpClient) {}

  location(numero: string | number) {
    return this.client.get(this.url+numero)   
  }

  residents(numero: string | number) {
    return this.client.get(this.url+numero)   
  }


}

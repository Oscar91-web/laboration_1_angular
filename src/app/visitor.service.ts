import { Injectable } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor() { }

  static readonly VISITOR_NAME: string = "visitor_name";
  static readonly DRINK_NAME: string = "Drink_name";
  saveName(name:string){
    localStorage.setItem(VisitorService.VISITOR_NAME, name);
  }
  saveDrink(drink:string){
    localStorage.setItem(VisitorService.DRINK_NAME, drink)
  }
  getName(){
    return localStorage.getItem(VisitorService.VISITOR_NAME);
    
  }
  getDrink(){
    return localStorage.getItem(VisitorService.DRINK_NAME)
  }
  resetAll(){
    localStorage.clear();
  }
}

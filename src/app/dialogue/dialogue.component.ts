import { Component, OnInit, Output, Input } from '@angular/core';
import { VisitorService } from '../Visitor.Service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent implements OnInit {
  name:string;
  saveName:string;
  beverage:string;
  beverageSelected:boolean = false;
  neverhere:boolean=false;
  message:string;
  startDialogue = "Howdie stranger. Haven't seen your face around here before. What's your name?"
  //hanterar beverage
  
  remember(drink: string){
    console.log("drink is " + drink);
    this.visitorService.saveDrink(drink);
    this.beverage = drink;
    this.beverageSelected = true;
  }
  

  //hanterar namn
  onClick(name: string){ //känns lite konstig, kanske går att göra bättre(tillsammans med dialogue.html)
    console.log("click: " + name);
    name = this.name;
    console.log(name);
    this.visitorService.saveName(name);
    this.saveName = name;
    this.message = "Alright " + this.saveName + ", what can I do you for?";
    
    
  }
  forgetMe(){
    this.visitorService.resetAll();
    this.saveName = null;
    this.beverageSelected = false;
    this.neverhere = true;
    this.startDialogue = "Got it. Who are you again?"
  }
  favoriteBeverage(){
    console.log("favo: " + this.beverage)
    return this.beverage;
  }
  constructor(
    private visitorService: VisitorService
  ) { }

  ngOnInit(): void {
    this.saveName = this.visitorService.getName();
    this.beverage = this.visitorService.getDrink();
    this.beverageSelected = false;
    console.log(this.saveName + " " + this.beverage);
    if(this.saveName)
    {
      this.message ="Hello again, " + this.saveName + " The usual?";
    }
    
  }

}

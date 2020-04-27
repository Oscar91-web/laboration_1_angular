import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  beverages = [
    "Beer",
    "Milk",
    "Water"
  ];
  
  
  selectBeverage(beverage:string){
    console.log(beverage);
  }
  constructor() { }

  ngOnInit(): void {
  }
  @Output() onBeverageSelected = new EventEmitter()
  
}

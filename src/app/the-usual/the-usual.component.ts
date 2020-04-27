import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { VisitorService } from '../Visitor.Service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  
  
  constructor(
    private visitorService: VisitorService
  ) { }

  ngOnInit(): void {
   
  }
  @Output() onUsualSelected = new EventEmitter()
  @Input() favorite:string;

}

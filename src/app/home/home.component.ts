import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  addEventHandler(){
    let element = document.getElementsByClassName('ps__rail-y')[0] as HTMLElement;
    element.addEventListener('click', this.scroll, true);
  }

  scroll(e:Event){
    e.stopPropagation();
  }
}

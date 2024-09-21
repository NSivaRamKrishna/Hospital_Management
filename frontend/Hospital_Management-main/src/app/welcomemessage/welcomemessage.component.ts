import { Component } from '@angular/core';

interface City {
  name: string; 
}


@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomemessageComponent {
  cities: City[] | any;
  constructor() {
    this.cities = [{ name: 'Vizag ' }, { name: 'Vizianagaram' }];
  }
}

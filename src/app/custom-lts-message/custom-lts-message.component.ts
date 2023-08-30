import { Component } from '@angular/core';

interface City {
  name: string; 
}

@Component({
  selector: 'app-custom-lts-message',
  template: `<ng-container></ng-container>`,
})

export class CustomLtsMessageComponent {
  cities: City[] | any;
  constructor() {
    this.cities = [{ name: 'Vizag ' }, { name: 'Vizianagaram' }];
  }
}

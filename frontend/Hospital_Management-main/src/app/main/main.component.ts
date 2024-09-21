import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

interface City {
    name: string; 
  }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    cities: City[] | any;
    selectedCity : any
    items: MenuItem[] | any;
    items2: MenuItem[] | any;
    items3: MenuItem[] | any;
    formGroup: FormGroup | any;
    constructor() {
      this.cities = [{ name: 'Vizag ' }, { name: 'Vizianagaram' }];
      this.items = [
          {label: 'About Us',routerLink:'welcome'},
      ];
      this.items2 = [
        {label: 'Login',routerLink:'login'},   
    ];
    this.items3 = [
      {label: 'SignUp',routerLink:'signup'}, 
  ];
        
}

}

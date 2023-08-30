import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  items: MenuItem[] | any;

constructor(private route:Router){

    this.items = [
      {label: "Check Appoinments ",routerLink:'checkAppoinment'},
      {label: 'Add Appoinment',routerLink:'doctor'}, 
  ];
  }

  showFields(){
  }
  addFields() {
    this.route.navigateByUrl('doctor')
  }
}
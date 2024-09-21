import { Component } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  products: any[] = [];
  constructor(public api: HospitalserviceService){  }



ngOnInit(){
  this.getdata();
}
getdata(){
    this.api.getdata().subscribe((res:any)=>{
      this.products=res;
      console.log(this.products,"hello")
    })
  }
}

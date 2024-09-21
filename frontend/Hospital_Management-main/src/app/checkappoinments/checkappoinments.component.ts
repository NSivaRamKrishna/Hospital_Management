import { Component } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';

@Component({
  selector: 'app-checkappoinments',
  templateUrl: './checkappoinments.component.html',
  styleUrls: ['./checkappoinments.component.css']
})
export class CheckappoinmentsComponent {

  products: any[] = [];
  constructor(public api: HospitalserviceService){  }



ngOnInit(){
this.getappdata();
}
getappdata(){
  this.api.getappdata().subscribe((res:any)=>{
    this.products=res
  })

}
}

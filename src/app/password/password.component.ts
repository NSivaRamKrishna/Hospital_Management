import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  myform: any;

  constructor(private fb: FormBuilder,public fp: HospitalserviceService) { }

  ngOnInit() {
    this.myform = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(40)]],
      pPassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
     cpwd:['', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]],
    });
    
  }

  onSubmit() {
    
    console.log(this.myform.value);
    this.fp.postforgotpassword(this.myform.value).subscribe((res:any)=>{
      console.log(res,"updated")
    })
    

  }
  confirmpasswordValitor(){
    if(this.myform.value.pwd!== this.myform.value.cpwd){
     alert("not equal");
  }


}
}
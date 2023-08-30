import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  formGroup!: FormGroup;
  selectedGender: string | any;
  roles:any;
  password:any;
  myForm: FormGroup |any;
  constructor(private fb: FormBuilder, public reg:HospitalserviceService) {}
  ngOnInit(): void {

    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()}),
      
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      pPhoneNo: ['', Validators.required],
      area: ['', Validators.required],
      age: ['', Validators.required],
      gender:[' '],
      pPassword: ['', Validators.required],
      role: ['']
      
    });

    this.roles = ['patient', 'Doctor'];
    this.selectedGender = ['Male','Female']
  }



  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);      
      alert("Your data is inserted")
      this.reg.postregistration(this.myForm.value).subscribe((res:any)=>{
        console.log(res,'ok');
      })
      // Perform form submission logic here
      console.log(this.myForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}

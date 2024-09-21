import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HospitalserviceService } from '../hospitalservice.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'hospital';
  form: FormGroup | any;
  roles: any;
  successMessage: string | any;
  errorMessage: string | any;

  constructor(
    private fb: FormBuilder,
    private ngZone: NgZone,
    public api: HospitalserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(8)]],
      role: ['']
    });
    this.roles = ['patient', 'doctor'];
  }

  Submit() {
    // console.log("Role:", this.form.value.role);
    const a=this.form.value.role;
    console.log(a);
    
    console.log(this.form.value);
  
    this.api.postData(this.form.value).subscribe(
      (res: any) => {
        console.log('API response:', res); 
        // this.ngZone.run(() => {
        //   if (res.success) {
        //     console.log("welcomeeeee");
        //     this.successMessage = "Login successful";
        //     if (res.role === 'patient') {
        //       this.router.navigateByUrl('/pat'); // Navigate to '/pat' for patient role
        //     } else if (res.role === 'doctor') {
        //       this.router.navigate(['options']); // Navigate to 'options' for doctor role
        //     } else {
        //       console.log("Invalid role");
        //     }
        //   } else {
        //     console.log("failddddddddddddddddddd");
        //     this.errorMessage = "Login failed";
        //   }
      //   });
      },
      (error: any) => {
        console.error('An error occurred:', error);
        console.log('Error response text:', error.error.text);
      
        // Check if the response text is "ok"
        if (error.error.text === "Login Successful" && a==="patient" ) {
          alert("welcome")
          this.router.navigateByUrl('/patient'); // Navigate to '/pat' for patient role
        }
        
          // Handle the specific response indicating an error condition
          else if (error.error.text === "Login Successful" && a==='doctor' ) {
            this.router.navigateByUrl('/options');}
        else {
          // Handle other error conditions or display a generic error message
          this.errorMessage = "Login failed. Please check your credentials and try again.";
        }
      }
      
      
    );
  }
  
  
  
}

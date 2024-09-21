import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllComponent } from './all/all.component';
import { WelcomemessageComponent } from './welcomemessage/welcomemessage.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { OptionsComponent } from './options/options.component';
import { CheckappoinmentsComponent } from './checkappoinments/checkappoinments.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '',   redirectTo: 'main/welcome', pathMatch: 'full' }, 
{
  path:'main',component:AllComponent,
children:[{
  path:'welcome',component:WelcomemessageComponent},
{
  path:'login',component:LoginComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'forgotPassword',component:PasswordComponent
}
],
},
  {path:'patient',component:PatientComponent},
  {path:'doctor',component:DoctorComponent},

  {path:'options',component:OptionsComponent,
children:[
  {path:'checkAppoinment',component:CheckappoinmentsComponent},
  {path:'doctor',component:DoctorComponent},
  
],

},


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }

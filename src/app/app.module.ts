import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageModule } from 'primeng/image';
import { MainComponent } from './main/main.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { SearchComponent } from './search/search.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { CustomLtsMessageComponent } from './custom-lts-message/custom-lts-message.component';
import { LoginComponent } from './login/login.component';
import { WelcomemessageComponent } from './welcomemessage/welcomemessage.component';
import { AllComponent } from './all/all.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule} from 'primeng/table';
import { OptionsComponent } from './options/options.component';
import { SignupComponent } from './signup/signup.component';
import { CalendarModule } from 'primeng/calendar';
import { CheckappoinmentsComponent } from './checkappoinments/checkappoinments.component';
import { PasswordComponent } from './password/password.component';
import { TreeTableModule } from 'primeng/treetable';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DoctorComponent,
    PatientComponent,
    SearchComponent,
    CustomLtsMessageComponent,
    LoginComponent,
    WelcomemessageComponent,
    AllComponent,
    OptionsComponent,
    SignupComponent,
    CheckappoinmentsComponent,
    PasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    ButtonModule,InputTextModule,MenubarModule,
    BrowserAnimationsModule,
    CascadeSelectModule,ReactiveFormsModule,CardModule,FormsModule,DropdownModule,
    HttpClientModule,RadioButtonModule,TableModule,CalendarModule,TreeTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

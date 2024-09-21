import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HospitalserviceService } from '../hospitalservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [MessageService]
})
export class DoctorComponent implements OnInit {
  myForm: FormGroup | any;
  selectedCity: any;
  minDate: Date | any;
  cities: any;
  date: any;

  constructor(private fb: FormBuilder, public ms: HospitalserviceService) {}

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);

    this.myForm = this.fb.group({
      slNo: ['', Validators.required],
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      area: [''],
      slot: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.cities = ['vizag', 'vizianagaram'];
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = { ...this.myForm.value };
      formData.date = this.getFormattedDate(this.myForm.value.date);
      console.log(formData);
      alert('Your data is inserted');
      this.ms.postDocData(formData).subscribe((res: any) => {
        console.log(res);
      });
    } else {
      console.log('Form is invalid');
    }
  }

  getFormattedDate(date: Date): string {
    if (date) {
      const year = date.getFullYear();
      const month = this.addLeadingZero(date.getMonth() + 1);
      const day = this.addLeadingZero(date.getDate());
      return `${year}-${month}-${day}`;
    }
    return '';
  }

  addLeadingZero(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }
}

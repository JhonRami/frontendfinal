import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from '../../../services/reports.service';
import { Router } from '@angular/router';
import { ReportsI } from '../../../models/reports';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-reports',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-reports.component.html',
  styleUrls: ['./create-reports.component.css']
})
export class CreateReportsComponent implements OnInit {
  public form: FormGroup;

  reportsService = inject(ReportsService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      student: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: ReportsI = this.form.value;
    console.log(formValue);
    this.reportsService.createReports(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/reports');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/reports');
  }

  get student() { return this.form.get('student'); }
  get description() { return this.form.get('description'); }
  get date() { return this.form.get('date'); }
}

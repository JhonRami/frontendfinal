import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionService } from '../../../services/admission.service';
import { Router } from '@angular/router';
import { AdmissionI } from '../../../models/admission';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-admission',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-admission.component.html',
  styleUrls: ['./create-admission.component.css']
})
export class CreateAdmissionComponent implements OnInit {
  public form: FormGroup;

  admissionService = inject(AdmissionService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      student: [null, [Validators.required]],
      dateadmission: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: AdmissionI = this.form.value;
    console.log(formValue);
    this.admissionService.createAdmission(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/admission');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/admission');
  }

  get student() { return this.form.get('student'); }
  get dateadmission() { return this.form.get('dateadmission'); }
  get status() { return this.form.get('status'); }
}

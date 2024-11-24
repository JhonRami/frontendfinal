import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansService } from '../../../services/loans.service';
import { Router } from '@angular/router';
import { LoansI } from '../../../models/loans';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-loans',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-loans.component.html',
  styleUrls: ['./create-loans.component.css']
})
export class CreateLoansComponent implements OnInit {
  public form: FormGroup;

  loansService = inject(LoansService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      student: [null, [Validators.required]],
      namebook: ['', [Validators.required]],
      dateloans: ['', [Validators.required]],
      datereturn: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: LoansI = this.form.value;
    console.log(formValue);
    this.loansService.createLoans(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/loans');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/loans');
  }

  get student() { return this.form.get('student'); }
  get namebook() { return this.form.get('namebook'); }
  get dateloans() { return this.form.get('dateloans'); }
  get datereturn() { return this.form.get('datereturn'); }
}

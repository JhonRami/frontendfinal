import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoansService } from '../../../services/loans.service';
import { LoansI } from '../../../models/loans';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-loans', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-loans.component.html', 
  styleUrls: ['./update-loans.component.css']
})
export class UpdateLoansComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  loansService = inject(LoansService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    // Inicializa el formulario dentro del constructor
    this.form = this.formBuilder.group({
      id: [''],
      student: ['', [Validators.required]],
      namebook: ['', [Validators.required]],
      dateloans: ['', [Validators.required]],
      datereturn: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getLoan(this.id);
  }

  getLoan(id: number) {
    this.loansService.getOneLoan(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: LoansI = this.form.value;
    const id: number = this.form.value.id;
    this.loansService.updateLoans(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('loans');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
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

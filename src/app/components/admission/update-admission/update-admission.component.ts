import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionService } from '../../../services/admission.service';
import { AdmissionI } from '../../../models/admission';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-admission', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-admission.component.html', 
  styleUrls: ['./update-admission.component.css']
})
export class UpdateAdmissionComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  admissionsService = inject(AdmissionService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    // Inicializa el formulario dentro del constructor
    this.form = this.formBuilder.group({
      id: [''],
      student: ['', [Validators.required]],
      dateadmission: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAdmission(this.id);
  }

  getAdmission(id: number) {
    this.admissionsService.getOneAdmission(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: AdmissionI = this.form.value;
    const id: number = this.form.value.id;
    this.admissionsService.updateAdmission(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('admission');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
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


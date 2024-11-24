import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from '../../../services/reports.service';
import { ReportsI } from '../../../models/reports';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-reports', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-reports.component.html', 
  styleUrls: ['./update-reports.component.css']
})
export class UpdateReportsComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  reportsService = inject(ReportsService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    // Inicializa el formulario dentro del constructor
    this.form = this.formBuilder.group({
      id: [''],
      student: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getReport(this.id);
  }

  getReport(id: number) {
    this.reportsService.getOneReport(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: ReportsI = this.form.value;
    const id: number = this.form.value.id;
    this.reportsService.updateReports(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('reports');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
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

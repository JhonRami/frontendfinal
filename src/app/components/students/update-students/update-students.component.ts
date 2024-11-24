import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../services/students.service';
import { StudentsI } from '../../../models/students';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-students', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-students.component.html', 
  styleUrls: ['./update-students.component.css']
})
export class UpdateStudentsComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  studentsService = inject(StudentsService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    // Inicializa el formulario dentro del constructor
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      program: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudent(this.id);
  }

  getStudent(id: number) {
    this.studentsService.getOneStudent(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: StudentsI = this.form.value;
    const id: number = this.form.value.id;
    this.studentsService.updateStudents(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('students');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/students');
  }

  get name() { return this.form.get('name'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
  get program() { return this.form.get('program'); }
}

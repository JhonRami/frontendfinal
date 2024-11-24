import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../../../services/students.service';
import { Router } from '@angular/router';
import { StudentsI } from '../../../models/students';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-students',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  public form: FormGroup;

  studentsService = inject(StudentsService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      program: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: StudentsI = this.form.value;
    console.log(formValue);
    this.studentsService.createStudents(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/students');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
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

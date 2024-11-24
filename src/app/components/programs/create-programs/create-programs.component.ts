import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsService } from '../../../services/programs.service';
import { Router } from '@angular/router';
import { ProgramsI } from '../../../models/programs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-programs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-programs.component.html',
  styleUrls: ['./create-programs.component.css']
})
export class CreateProgramsComponent implements OnInit {
  public form: FormGroup;

  programsService = inject(ProgramsService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      director: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: ProgramsI = this.form.value;
    console.log(formValue);
    this.programsService.createPrograms(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/programs');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/programs');
  }

  get name() { return this.form.get('name'); }
  get director() { return this.form.get('director'); }
}


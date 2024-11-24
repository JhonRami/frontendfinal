import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsdirService } from '../../../services/programsdir.service';
import { Router } from '@angular/router';
import { ProgramsdirI } from '../../../models/programsdir';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-programsdir',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './create-programsdir.component.html',
  styleUrls: ['./create-programsdir.component.css']
})
export class CreateProgramsdirComponent implements OnInit {
  public form: FormGroup;

  programsdirService = inject(ProgramsdirService);
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: ProgramsdirI = this.form.value;
    console.log(formValue);
    this.programsdirService.createProgramsdir(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('/programsdir');
      },
      err => {
        console.log(err);
        console.log('Creation failed');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/programsdir');
  }

  get name() { return this.form.get('name'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
}

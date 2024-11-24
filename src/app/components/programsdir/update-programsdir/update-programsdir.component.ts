import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsdirService } from '../../../services/programsdir.service';
import { ProgramsdirI } from '../../../models/programsdir';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-programsdir', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-programsdir.component.html', 
  styleUrls: ['./update-programsdir.component.css']
})
export class UpdateProgramsdirComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  programsdirService = inject(ProgramsdirService);

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
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProgramDir(this.id);
  }

  getProgramDir(id: number) {
    this.programsdirService.getOneProgramsdir(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: ProgramsdirI = this.form.value;
    const id: number = this.form.value.id;
    this.programsdirService.updateProgramsdir(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('programsdir');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
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


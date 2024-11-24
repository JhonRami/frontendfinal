import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from '../../../services/programs.service';
import { ProgramsI } from '../../../models/programs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-programs', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-programs.component.html', 
  styleUrls: ['./update-programs.component.css']
})
export class UpdateProgramsComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  programsService = inject(ProgramsService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    // Inicializa el formulario dentro del constructor
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      director: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProgram(this.id);
  }

  getProgram(id: number) {
    this.programsService.getOneProgram(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: ProgramsI = this.form.value;
    const id: number = this.form.value.id;
    this.programsService.updatePrograms(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('programs');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/programs');
  }

  get name() { return this.form.get('name'); }
  get director() { return this.form.get('director'); }
}

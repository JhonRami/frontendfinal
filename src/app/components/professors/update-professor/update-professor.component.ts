import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorsService } from '../../../services/professors.service';
import { ProfessorsI } from '../../../models/professors';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-professor', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './update-professor.component.html', 
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup;

  professorsService = inject(ProfessorsService);

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
    this.getProfessors(this.id);
  }

  getProfessors(id: number) {
    this.professorsService.getOneProfessor(id)
      .subscribe({
        next: (data) => {
          this.form.setValue(data);
        }
      });
  }

  onSubmit(): void {
    const formValue: ProfessorsI = this.form.value;
    const id: number = this.form.value.id;
    this.professorsService.updateProfessors(id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('professors');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/professors');
  }

  get name() { return this.form.get('name'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
  get program() { return this.form.get('program'); }
}

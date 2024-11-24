import { Component, OnInit } from '@angular/core';
import { StudentsI } from '../../../models/students';
import { ProgramsI } from '../../../models/programs'; // Importa ProgramsI
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StudentsService } from '../../../services/students.service';
import { ProgramsService } from '../../../services/programs.service'; // Importa el servicio de programas

@Component({
  selector: 'app-show-students',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ShowStudentsComponent implements OnInit {
  public students: StudentsI[] = [];
  public programs: ProgramsI[] = []; // Array para almacenar programas

  constructor(
    private studentsService: StudentsService,
    private programsService: ProgramsService, // Inyecta el servicio de programas
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showStudents();
    this.showPrograms(); // Llama al método para obtener programas
  }

  showStudents() {
    this.studentsService.getAllStudents()
      .subscribe({
        next: (data) => {
          this.students = data;
        }
      });
  }

  showPrograms() {
    this.programsService.getAllPrograms() // Asegúrate de que este método esté definido en tu servicio
      .subscribe({
        next: (data) => {
          this.programs = data;
        }
      });
  }

  getProgramName(programId: number): string {
    const program = this.programs.find(p => p.id === programId);
    return program ? program.name : 'Desconocido'; // Devuelve 'Desconocido' si no se encuentra
  }

  delete(id: number): void {
    this.router.navigateByUrl('/students');
    this.studentsService.deleteStudents(id).subscribe(
      () => {
        this.showStudents();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/students');
      }
    );
  }
}

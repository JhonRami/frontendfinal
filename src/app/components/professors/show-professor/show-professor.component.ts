import { Component, OnInit } from '@angular/core';
import { ProfessorsI } from '../../../models/professors';
import { ProgramsI } from '../../../models/programs'; // Asegúrate de importar ProgramsI
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProfessorsService } from '../../../services/professors.service';
import { ProgramsService } from '../../../services/programs.service'; // Importa el servicio de programas

@Component({
  selector: 'app-show-professor',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-professor.component.html',
  styleUrls: ['./show-professor.component.css']
})
export class ShowProfessorComponent implements OnInit {
  public professors: ProfessorsI[] = [];
  public programs: ProgramsI[] = []; // Array para almacenar programas

  constructor(
    private professorsService: ProfessorsService,
    private programsService: ProgramsService, // Inyecta el servicio de programas
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showProfessors();
    this.showPrograms(); // Llama al método para obtener programas
  }

  showProfessors() {
    this.professorsService.getAllProfessors()
      .subscribe({
        next: (data) => {
          this.professors = data;
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
    this.router.navigateByUrl('/professors');
    this.professorsService.deleteProfessors(id).subscribe(
      () => {
        this.showProfessors();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/professors');
      }
    );
  }
}

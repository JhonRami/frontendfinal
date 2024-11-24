import { Component, OnInit } from '@angular/core';
import { ProgramsI } from '../../../models/programs';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgramsService } from '../../../services/programs.service'
import { ProgramsdirI } from '../../../models/programsdir';
import { ProgramsdirService } from '../../../services/programsdir.service'; // Importa el servicio de directors

@Component({
  selector: 'app-show-programs',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-programs.component.html',
  styleUrls: ['./show-programs.component.css']
})
export class ShowProgramsComponent implements OnInit {
  public programs: ProgramsI[] = [];
  public directors: ProgramsdirI[] = []; // Array para almacenar directores

  constructor(
    private programsService: ProgramsService,
    private router: Router,
    private programsdirService: ProgramsdirService // Inyecta el servicio de directores
  ) { }

  ngOnInit(): void {
    this.showPrograms();
    this.showDirectors(); // Llama al método para obtener directores
  }

  showPrograms() {
    this.programsService.getAllPrograms()
      .subscribe({
        next: (data) => {
          this.programs = data;
        }
      });
  }

  showDirectors() {
    this.programsdirService.getAllProgramsdir() // Asegúrate de que este método esté definido en tu servicio
      .subscribe({
        next: (data) => {
          this.directors = data;
        }
      });
  }

  getDirectorName(directorId: number): string {
    const director = this.directors.find(d => d.id === directorId);
    return director ? director.name : 'Desconocido'; // Devuelve 'Desconocido' si no se encuentra
  }

  delete(id: number): void {
    this.router.navigateByUrl('/programs');
    this.programsService.deletePrograms(id).subscribe(
      () => {
        this.showPrograms();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/programs');
      }
    );
  }
}

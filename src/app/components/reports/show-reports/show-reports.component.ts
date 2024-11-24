import { Component, OnInit } from '@angular/core';
import { ReportsI } from '../../../models/reports';
import { StudentsI } from '../../../models/students'; // Importa StudentsI
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReportsService } from '../../../services/reports.service';
import { StudentsService } from '../../../services/students.service'; // Importa StudentsService

@Component({
  selector: 'app-show-reports',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ShowReportsComponent implements OnInit {
  public reports: ReportsI[] = [];
  public students: StudentsI[] = []; // Array para almacenar estudiantes

  constructor(
    private reportsService: ReportsService,
    private studentsService: StudentsService, // Inyecta StudentsService
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showReports();
    this.showStudents(); // Llama al método para obtener estudiantes
  }

  showReports() {
    this.reportsService.getAllReports()
      .subscribe({
        next: (data) => {
          this.reports = data;
        }
      });
  }

  showStudents() {
    this.studentsService.getAllStudents() // Asegúrate de que este método esté definido en tu servicio
      .subscribe({
        next: (data) => {
          this.students = data;
        }
      });
  }

  getStudentName(studentId: number): string {
    const student = this.students.find(s => s.id === studentId);
    return student ? student.name : 'Desconocido'; // Devuelve 'Desconocido' si no se encuentra
  }

  delete(id: number): void {
    this.router.navigateByUrl('/reports');
    this.reportsService.deleteReports(id).subscribe(
      () => {
        this.showReports();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/reports');
      }
    );
  }
}

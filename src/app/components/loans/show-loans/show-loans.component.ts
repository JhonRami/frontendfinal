import { Component, OnInit } from '@angular/core';
import { LoansI } from '../../../models/loans';
import { StudentsI } from '../../../models/students'; // Importa StudentsI
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { LoansService } from '../../../services/loans.service';
import { StudentsService } from '../../../services/students.service'; // Importa StudentsService

@Component({
  selector: 'app-show-loans',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-loans.component.html',
  styleUrls: ['./show-loans.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ShowLoansComponent implements OnInit {
  public loans: LoansI[] = [];
  public students: StudentsI[] = []; // Array para almacenar estudiantes

  constructor(
    private loansService: LoansService,
    private studentsService: StudentsService, // Inyecta StudentsService
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showLoans();
    this.showStudents(); // Llama al método para obtener estudiantes
  }

  showLoans() {
    this.loansService.getAllLoans()
      .subscribe({
        next: (data) => {
          this.loans = data;
        }
      });
  }

  showStudents() {
    this.studentsService.getAllStudents() 
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
    this.router.navigateByUrl('/loans');
    this.loansService.deleteLoans(id).subscribe(
      () => {
        this.showLoans();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/loans');
      }
    );
  }
}

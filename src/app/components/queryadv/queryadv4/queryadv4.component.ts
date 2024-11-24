import { Component, OnInit } from '@angular/core';
import { Queryadv4I } from '../../../models/queryadv4';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv4Service } from '../../../services/queryadv/queryadv4.service';
import { StudentsService } from '../../../services/students.service';
import { StudentsI } from '../../../models/students';

@Component({
  selector: 'app-show-queryadv4',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv4.component.html',
  styleUrls: ['./queryadv4.component.css']
})
export class ShowQueryadv4Component implements OnInit {
  public queryadv4: Queryadv4I[] = [];
  public students: StudentsI[] = [];
  
  constructor(
    private queryadv4Service: Queryadv4Service,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv4();
    this.showStudents();
  }

  showQueryadv4() {
    this.queryadv4Service.getAllQueryadv4()
      .subscribe({
        next: (data) => {
          this.queryadv4 = data;
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
    this.router.navigateByUrl('/queryadv4');
    this.queryadv4Service.deleteQueryadv4(id).subscribe(
      () => {
        this.showQueryadv4();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv4');
      }
    );
  }
}

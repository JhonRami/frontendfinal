import { Component, OnInit } from '@angular/core';
import { Queryadv1I } from '../../../models/queryadv1';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv1Service } from '../../../services/queryadv/queryadv1.service';
import { StudentsService } from '../../../services/students.service';
import { StudentsI } from '../../../models/students';

@Component({
  selector: 'app-show-queryadv1',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv1.component.html',
  styleUrls: ['./queryadv1.component.css']
})
export class ShowQueryadv1Component implements OnInit {
  public queryadv1: Queryadv1I[] = [];
  public students: StudentsI[] = [];
  
  constructor(
    private queryadv1Service: Queryadv1Service,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv1();
    this.showStudents();
  }

  showQueryadv1() {
    this.queryadv1Service.getAllQueryadv1()
      .subscribe({
        next: (data) => {
          this.queryadv1 = data;
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
    this.router.navigateByUrl('/queryadv1');
    this.queryadv1Service.deleteQueryadv1(id).subscribe(
      () => {
        this.showQueryadv1();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv1');
      }
    );
  }
}

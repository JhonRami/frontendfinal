import { Component, OnInit } from '@angular/core';
import { Queryadv2I } from '../../../models/queryadv2';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv2Service } from '../../../services/queryadv/queryadv2.service';
import { StudentsService } from '../../../services/students.service';
import { StudentsI } from '../../../models/students';

@Component({
  selector: 'app-show-queryadv2',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv2.component.html',
  styleUrls: ['./queryadv2.component.css']
})
export class ShowQueryadv2Component implements OnInit {
  public queryadv2: Queryadv2I[] = [];
  public students: StudentsI[] = [];
  
  constructor(
    private queryadv2Service: Queryadv2Service,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv2();
    this.showStudents();
  }

  showQueryadv2() {
    this.queryadv2Service.getAllQueryadv2()
      .subscribe({
        next: (data) => {
          this.queryadv2 = data;
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
    this.router.navigateByUrl('/queryadv2');
    this.queryadv2Service.deleteQueryadv2(id).subscribe(
      () => {
        this.showQueryadv2();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv2');
      }
    );
  }
}

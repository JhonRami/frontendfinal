import { Component, OnInit } from '@angular/core';
import { Queryadv3I } from '../../../models/queryadv3';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv3Service } from '../../../services/queryadv/queryadv3.service';
import { StudentsService } from '../../../services/students.service';
import { StudentsI } from '../../../models/students';

@Component({
  selector: 'app-show-queryadv3',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv3.component.html',
  styleUrls: ['./queryadv3.component.css']
})
export class ShowQueryadv3Component implements OnInit {
  public queryadv3: Queryadv3I[] = [];
  public students: StudentsI[] = [];
  
  constructor(
    private queryadv3Service: Queryadv3Service,
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv3();
    this.showStudents();
  }

  showQueryadv3() {
    this.queryadv3Service.getAllQueryadv3()
      .subscribe({
        next: (data) => {
          this.queryadv3 = data;
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
    this.router.navigateByUrl('/queryadv3');
    this.queryadv3Service.deleteQueryadv3(id).subscribe(
      () => {
        this.showQueryadv3();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv3');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AdmissionI } from '../../../models/admission';
import { StudentsI } from '../../../models/students'; // Importa la interfaz del estudiante
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AdmissionService } from '../../../services/admission.service';
import { StudentsService } from '../../../services/students.service'; // Servicio para obtener estudiantes

@Component({
    selector: 'app-show-admission',
    standalone: true,
    imports: [TableModule, ButtonModule, CardModule, RouterModule],
    templateUrl: './show-admission.component.html',
    styleUrls: ['./show-admission.component.css'] // Corregido a styleUrls
})
export class ShowAdmissionComponent implements OnInit {
    public admissions: AdmissionI[] = [];
    public students: StudentsI[] = []; // Array para almacenar estudiantes

    constructor(
        private admissionService: AdmissionService,
        private studentService: StudentsService, // Inyecta el servicio de estudiantes
        private router: Router
    ) { }

    ngOnInit(): void {
        this.showAdmissions();
        this.showStudents(); // Llama al método para obtener estudiantes
    }

    showAdmissions() {
        this.admissionService.getAllAdmission()
            .subscribe({
                next: (data) => {
                    this.admissions = data;
                }
            });
    }

    showStudents() {
        this.studentService.getAllStudents() // Asegúrate de que este método esté definido en tu servicio
            .subscribe({
                next: (data) => {
                    this.students = data;
                }
            });
    }

    delete(id: number): void {
        this.router.navigateByUrl('/admission');
        this.admissionService.deleteAdmission(id).subscribe(
            () => {
                this.showAdmissions();
            },
            err => {
                console.log('error');
                this.router.navigateByUrl('/admission');
            }
        );
    }

    // Método para obtener el nombre del estudiante
    getStudentName(studentId: number): string {
        const student = this.students.find(s => s.id === studentId);
        return student ? student.name : 'Desconocido'; // Devuelve 'Desconocido' si no se encuentra
    }
}

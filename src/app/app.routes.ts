import { Routes } from '@angular/router';

// Professors
import { ShowProfessorComponent } from './components/professors/show-professor/show-professor.component';
import { CreateProfessorComponent } from './components/professors/create-professor/create-professor.component';
import { UpdateProfessorComponent } from './components/professors/update-professor/update-professor.component';
import { DeleteProfessorComponent } from './components/professors/delete-professor/delete-professor.component';

// Students
import { ShowStudentsComponent } from './components/students/show-students/show-students.component';
import { CreateStudentsComponent } from './components/students/create-students/create-students.component';
import { UpdateStudentsComponent } from './components/students/update-students/update-students.component';
import { DeleteStudentsComponent } from './components/students/delete-students/delete-students.component';

// Admission
import { ShowAdmissionComponent } from './components/admission/show-admission/show-admission.component';
import { CreateAdmissionComponent } from './components/admission/create-admission/create-admission.component';
import { UpdateAdmissionComponent } from './components/admission/update-admission/update-admission.component';
import { DeleteAdmissionComponent } from './components/admission/delete-admission/delete-admission.component';

// Loans
import { ShowLoansComponent } from './components/loans/show-loans/show-loans.component';
import { CreateLoansComponent } from './components/loans/create-loans/create-loans.component';
import { UpdateLoansComponent } from './components/loans/update-loans/update-loans.component';
import { DeleteLoansComponent } from './components/loans/delete-loans/delete-loans.component';

// Programs
import { ShowProgramsComponent } from './components/programs/show-programs/show-programs.component';
import { CreateProgramsComponent } from './components/programs/create-programs/create-programs.component';
import { UpdateProgramsComponent } from './components/programs/update-programs/update-programs.component';
import { DeleteProgramsComponent } from './components/programs/delete-programs/delete-programs.component';

// Program Directors
import { ShowProgramsdirComponent } from './components/programsdir/show-programsdir/show-programsdir.component';
import { CreateProgramsdirComponent } from './components/programsdir/create-programsdir/create-programsdir.component';
import { UpdateProgramsdirComponent } from './components/programsdir/update-programsdir/update-programsdir.component';
import { DeleteProgramsdirComponent } from './components/programsdir/delete-programsdir/delete-programsdir.component';

// Reports
import { ShowReportsComponent } from './components/reports/show-reports/show-reports.component';
import { CreateReportsComponent } from './components/reports/create-reports/create-reports.component';
import { UpdateReportsComponent } from './components/reports/update-reports/update-reports.component';
import { DeleteReportsComponent } from './components/reports/delete-reports/delete-reports.component';

import { ConsultasComponent } from './components/queryadv/consultas/consultas.component';
import { ShowQueryadv1Component } from './components/queryadv/queryadv1/queryadv1.component';
import { ShowQueryadv2Component } from './components/queryadv/queryadv2/queryadv2.component';
import { ShowQueryadv3Component } from './components/queryadv/queryadv3/queryadv3.component';
import { ShowQueryadv4Component } from './components/queryadv/queryadv4/queryadv4.component';
import { ShowQueryadv5Component } from './components/queryadv/queryadv5/queryadv5.component';
import { ShowQueryadv6Component } from './components/queryadv/queryadv6/queryadv6.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    // Professors routes
    {
        path: 'professors',
        component: ShowProfessorComponent
    },
    {
        path: 'professors/new',
        component: CreateProfessorComponent
    },
    {
        path: 'professors/edit/:id',
        component: UpdateProfessorComponent
    },
    {
        path: 'professors/delete/:id',
        component: DeleteProfessorComponent
    },

    // Students routes
    {
        path: 'students',
        component: ShowStudentsComponent
    },
    {
        path: 'students/new',
        component: CreateStudentsComponent
    },
    {
        path: 'students/edit/:id',
        component: UpdateStudentsComponent
    },
    {
        path: 'students/delete/:id',
        component: DeleteStudentsComponent
    },

    // Admission routes
    {
        path: 'admission',
        component: ShowAdmissionComponent
    },
    {
        path: 'admission/new',
        component: CreateAdmissionComponent
    },
    {
        path: 'admission/edit/:id',
        component: UpdateAdmissionComponent
    },
    {
        path: 'admission/delete/:id',
        component: DeleteAdmissionComponent
    },

    // Loans routes
    {
        path: 'loans',
        component: ShowLoansComponent
    },
    {
        path: 'loans/new',
        component: CreateLoansComponent
    },
    {
        path: 'loans/edit/:id',
        component: UpdateLoansComponent
    },
    {
        path: 'loans/delete/:id',
        component: DeleteLoansComponent
    },

    // Programs routes
    {
        path: 'programs',
        component: ShowProgramsComponent
    },
    {
        path: 'programs/new',
        component: CreateProgramsComponent
    },
    {
        path: 'programs/edit/:id',
        component: UpdateProgramsComponent
    },
    {
        path: 'programs/delete/:id',
        component: DeleteProgramsComponent
    },

    // Program Directors routes
    {
        path: 'programsdir',
        component: ShowProgramsdirComponent
    },
    {
        path: 'programsdir/new',
        component: CreateProgramsdirComponent
    },
    {
        path: 'programsdir/edit/:id',
        component: UpdateProgramsdirComponent
    },
    {
        path: 'programsdir/delete/:id',
        component: DeleteProgramsdirComponent
    },

    // Reports routes
    {
        path: 'reports',
        component: ShowReportsComponent
    },
    {
        path: 'reports/new',
        component: CreateReportsComponent
    },
    {
        path: 'reports/edit/:id',
        component: UpdateReportsComponent
    },
    {
        path: 'reports/delete/:id',
        component: DeleteReportsComponent
    },
    {
        path: 'consultas',
        component: ConsultasComponent
    },

    {
        path: 'qeryadv1',
        component: ShowQueryadv1Component
      },
      {
        path: 'qeryadv2',
        component: ShowQueryadv2Component
      },
      {
        path: 'qeryadv3',
        component: ShowQueryadv3Component
      },
      {
        path: 'qeryadv4',
        component: ShowQueryadv4Component
      },
      {
        path: 'qeryadv5',
        component: ShowQueryadv5Component
      },
      {
        path: 'qeryadv6',
        component: ShowQueryadv6Component
      },
];

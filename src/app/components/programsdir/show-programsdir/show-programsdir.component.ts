import { Component, OnInit } from '@angular/core';
import { ProgramsdirI } from '../../../models/programsdir';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgramsdirService } from '../../../services/programsdir.service';

@Component({
  selector: 'app-show-programsdir',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-programsdir.component.html',
  styleUrl: './show-programsdir.component.css'
})
export class ShowProgramsdirComponent implements OnInit {
  public programsdir: ProgramsdirI[] = [];
  
  constructor(
    private programsdirService: ProgramsdirService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showProgramsdir();
  }

  showProgramsdir() {
    this.programsdirService.getAllProgramsdir()
      .subscribe({
        next: (data) => {
          this.programsdir = data;
        }
      });
  }

  delete(id: number): void {
    this.router.navigateByUrl('/programsdir');
    this.programsdirService.deleteProgramsdir(id).subscribe(
      () => {
        this.showProgramsdir();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/programsdir');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Queryadv5I } from '../../../models/queryadv5';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv5Service } from '../../../services/queryadv/queryadv5.service';

@Component({
  selector: 'app-show-queryadv5',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv5.component.html',
  styleUrls: ['./queryadv5.component.css']
})
export class ShowQueryadv5Component implements OnInit {
  public queryadv5: Queryadv5I[] = [];
  
  constructor(
    private queryadv5Service: Queryadv5Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv5();
  }

  showQueryadv5() {
    this.queryadv5Service.getAllQueryadv5()
      .subscribe({
        next: (data) => {
          this.queryadv5 = data;
        }
      });
  }

  delete(id: number): void {
    this.router.navigateByUrl('/queryadv5');
    this.queryadv5Service.deleteQueryadv5(id).subscribe(
      () => {
        this.showQueryadv5();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv5');
      }
    );
  }
}

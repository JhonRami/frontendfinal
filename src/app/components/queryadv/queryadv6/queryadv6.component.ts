import { Component, OnInit } from '@angular/core';
import { Queryadv6I } from '../../../models/queryadv6';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Queryadv6Service } from '../../../services/queryadv/queryadv6.service';

@Component({
  selector: 'app-show-queryadv6',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './queryadv6.component.html',
  styleUrls: ['./queryadv6.component.css']
})
export class ShowQueryadv6Component implements OnInit {
  public queryadv6: Queryadv6I[] = [];
  
  constructor(
    private queryadv6Service: Queryadv6Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showQueryadv6();
  }

  showQueryadv6() {
    this.queryadv6Service.getAllQueryadv6()
      .subscribe({
        next: (data) => {
          this.queryadv6 = data;
        }
      });
  }

  delete(id: number): void {
    this.router.navigateByUrl('/queryadv6');
    this.queryadv6Service.deleteQueryadv6(id).subscribe(
      () => {
        this.showQueryadv6();
      },
      err => {
        console.log('error');
        this.router.navigateByUrl('/queryadv6');
      }
    );
  }
}

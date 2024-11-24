import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];


  ngOnInit(): void {
    this.items = [
      {
        label: 'Profesores',
        icon: 'pi pi-fw pi-user',
        routerLink: '/professors'
      },
      {
        label: 'Estudiantes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/students'
      },
      {
        label: 'Aadmisiones',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/admission'
      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-book',
        routerLink: '/loans'
      },
      {
        label: 'Programas',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/programs'
      },
      {
        label: 'Directores de Programa',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/programsdir'
      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/reports'
      },
      {
        label: 'Consultas',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/consultas'
      },
    ];
  }
}

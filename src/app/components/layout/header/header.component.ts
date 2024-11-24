import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'; // Importación del módulo de botones de PrimeNG

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, // Si estás usando módulos independientes (en caso de que tu proyecto lo requiera)
  imports: [ButtonModule] // Aquí importas los módulos directamente en el componente
})
export class HeaderComponent {
  // Puedes añadir lógica o eventos aquí si es necesario
}

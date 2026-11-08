import { Component } from '@angular/core';
@Component({
  selector: 'app-home-screen',
  imports: [],
  templateUrl: './home-screen.html',
  styleUrl: './home-screen.scss'
})
export class HomeScreen {
  tecnologias = [
    {
      nombre: 'Angular',
      icono: 'bi-braces',
      descripcion: 'Framework para construir aplicaciones web de una sola página.'
    },
    {
      nombre: 'TypeScript',
      icono: 'bi-filetype-tsx',
      descripcion: 'Superconjunto tipado de JavaScript utilizado por Angular.'
    },
    {
      nombre: 'Node.js y NPM',
      icono: 'bi-box-seam',
      descripcion: 'Entorno de ejecución y gestor de paquetes o dependencias del proyecto.'
    }
  ];
}

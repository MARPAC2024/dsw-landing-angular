// 1. Importación de módulos principales del núcleo de Angular:
// - Component: decorador para definir el componente y sus metadatos.
// - ElementRef: permite acceder directamente al elemento del DOM (HTML).
// - ViewChild: permite buscar y vincular un elemento del HTML dentro de este archivo TS.
// - AfterViewInit: interfaz de ciclo de vida que se ejecuta cuando el HTML ya se renderizó.
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',
  imports: [],
  templateUrl: './documentacion-screen.html',
  styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen implements AfterViewInit {
  @ViewChild('carruselElement') carruselElement!: ElementRef;

  diapositivaActivaIndex: number = 0;
  urlDocumentacion = 'https://angular.dev';

  /*
  diapositivas = [
    { titulo: 'Node.js', imagen: 'assets/img/ca_node_1.png' },
    { titulo: 'TypeScript', imagen: 'assets/img/ca_typescript_1.png' },
    { titulo: 'Angular', imagen: 'assets/img/ca_angular_1.png' },
    { titulo: 'NPM', imagen: 'assets/img/ca_npm_1.png' }
  ];
  */

  diapositivas = [
    {
      titulo: 'Node.js',
      descripcion: 'Entorno de ejecución y escalabilidad para el servidor.',
      imagen: '/assets/img/ca_node_2.jpg',
      url: 'https://nodejs.org/docs/',
      color: '#00e640'
    },
    {
      titulo: 'TypeScript',
      descripcion: 'Superconjunto tipado de JavaScript para un código seguro.',
      imagen: '/assets/img/ca_typescript_2.jpg',
      url: 'https://www.typescriptlang.org/docs/',
      color: '#00d2ff'
    },
    {
      titulo: 'Angular',
      descripcion: 'Framework para construir aplicaciones SPA profesionales.',
      imagen: '/assets/img/ca_angular_2.jpg',
      url: 'https://angular.dev/',
      color: '#ff003b'
    },
    {
      titulo: 'NPM',
      descripcion: 'Gestor de paquetes y dependencias para JavaScript.',
      imagen: '/assets/img/ca_npm_2.jpg',
      url: 'https://docs.npmjs.com/',
      color: '#bd00ff'
    }
  ];

  // Getter que retorna el color hexadecimal de la diapositiva activa.
  // Se evalúa automáticamente cada vez que 'diapositivaActivaIndex' cambia.
  // Incluye un color de respaldo ('#00e640') para evitar errores si el índice no está listo.
  get colorActual(): string {
    return this.diapositivas[this.diapositivaActivaIndex]?.color || '#00e640';
  }

  // Sirve para actualizar el índice en tiempo real cuando el carrusel cambia de diapositiva.
  ngAfterViewInit(): void {
    if (this.carruselElement) {
      this.carruselElement.nativeElement.addEventListener('slide.bs.carousel', (event: any) => {
        this.diapositivaActivaIndex = event.to;
      });
    }
  }

}

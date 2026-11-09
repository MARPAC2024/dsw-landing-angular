import { Component } from '@angular/core';
@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Martha Alvarez',
    email: 'mpac.dsw@alm.buap.mx',
    telefono: '22 18 78 67 31',
    direccion: 'Facultad de Ciencias de la Computación, Benemérita Universidad Autónoma de Puebla, CU2, Puebla, Pue.',
    nacimiento: '5 de Noviembre de 1993'
  };
}

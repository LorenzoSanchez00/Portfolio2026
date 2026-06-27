import { Component, signal } from '@angular/core';

export class stack{
  name: string;
  constructor(technology: string){
    this.name = technology;
  }
}
export interface MyProject{
  name: string;
  description: string;
  img: string;
  stack: stack[];
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal<MyProject[]>([
    {name:'Gestor de Finanzas',
     description:'Sistema de gestión de finanzas personales creado con tecnologías .NET, permite al usuario registrar ingresos y egresos, organizarlos por categorías y cuentas, visualizarlos en tablas o calendario, y obtener reportes en Excel.',
     img:'imgs/project-GestionFinanzas.png',
     stack:[{name:'ASP.NET'},
            {name:'C#'},
            {name:'razor'},
            {name:'Bootstrap'},
            {name:'JQuery'},
            {name:'Dapper'},
            {name:'SQLServer'}],
      link:'--'},

    {name:'Landing Page Ecommerce', 
     description:'Landing Page para un reconocido mentor y creador de contenidos sobre ecommerce.',
     img:'proximamente',
     stack:[{name:'HTML'},
            {name:'CSS'},
            {name:'Bootstrap'},
            {name:'Typescript'},
            {name:'Angular'},
            {name:'Figma'},],
      link:'--'}
  ])

}

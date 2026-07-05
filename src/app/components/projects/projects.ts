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
     img:'imgs/EXCEL.svg',
     stack:[{name:'ASP.NET'},
            {name:'C#'},
            {name:'razor'},
            {name:'Bootstrap'},
            {name:'JQuery'},
            {name:'Dapper'},
            {name:'SQLServer'}],
      link:'https://github.com/LorenzoSanchez00/GestionDePresupuesto'},

    {name:'App de traduccion de audios', 
     description:'El usuario puede grabar un audio en español y la aplicación lo traduce a inglés, portugués francés o japonés. Aplicación web hecha en ASP.NET Core MVC que permite grabar la voz del usuario desde el navegador, transcribirla, traducirla a otro idioma y generar un nuevo audio con esa traducción usando ElevenLabs.',
     img:'imgs/project2.jpeg',
     stack:[{name:'HTML'},
            {name:'CSS'},
            {name:'Bootstrap'},
            {name:'ASP.NET Core MVC'},
            {name:'C#'},
            {name:'Javascript'},
            {name:'ElevenLabs'},],
      link:'https://github.com/LorenzoSanchez00/AudioTranslator'},

    {name:'Landing Page Ecommerce', 
     description:'Landing Page para un reconocido mentor y creador de contenidos sobre ecommerce.',
     img:'/imgs/project3.jpeg',
     stack:[{name:'HTML'},
            {name:'CSS'},
            {name:'Bootstrap'},
            {name:'Typescript'},
            {name:'Angular'},
            {name:'Figma'},],
      link:'#'}
  ])

}

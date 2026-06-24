import { Component, signal } from '@angular/core';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

export interface MySkill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  skills =  signal<MySkill[]>([
    {name: '.NET', icon:'/icons/dotnet.svg', category: 'BACKEND'},
    {name: 'C#', icon:'/icons/csharp.svg', category: 'BACKEND'},
    {name: 'JavaScript', icon:'/icons/javascript.svg', category: 'FRONTEND'},
    {name: 'TypeScript', icon:'/icons/typescript.svg', category: 'FRONTEND'},
    {name: 'Angular', icon:'/icons/angular.svg', category: 'FRONTEND'},
    {name: 'Bootstrap', icon:'/icons/bootstrap.svg', category: 'FRONTEND'},
    {name: 'CSS', icon:'/icons/css.svg', category: 'FRONTEND'},
    {name: 'HTML', icon:'/icons/html5.svg', category: 'FRONTEND'},
    {name: 'MySQL', icon:'/icons/mysql.svg', category: 'BACKEND'},
    {name: 'PostMan', icon:'/icons/postman.svg', category: 'OTROS'},
    {name: 'Git', icon:'/icons/git.svg', category: 'OTROS'},
    {name: 'GitHub', icon:'/icons/github.svg', category: 'OTROS'},
    {name: 'SQL-Server', icon:'/icons/sqlserver.svg', category: 'BACKEND'},
    {name: 'Jira', icon:'/icons/jira.svg', category: 'OTROS'},

  ]);

}

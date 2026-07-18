import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { intervalProvider } from 'rxjs/internal/scheduler/intervalProvider';

export interface MySkill {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [NgClass],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  defaultSkillActive = signal('BACKEND');
  getSkills = computed(() => this.skills().filter(t => t.category === this.defaultSkillActive()));

  skills =  signal<MySkill[]>([
    {name: '.NET', icon:'icons/dotnet.svg', category: 'BACKEND'},
    {name: 'C#', icon:'icons/csharp.svg', category: 'BACKEND'},
    {name: 'JavaScript', icon:'icons/javascript.svg', category: 'FRONTEND'},
    {name: 'TypeScript', icon:'icons/typescript.svg', category: 'FRONTEND'},
    {name: 'Angular', icon:'icons/angular.svg', category: 'FRONTEND'},
    {name: 'Bootstrap', icon:'icons/bootstrap.svg', category: 'FRONTEND'},
    {name: 'CSS', icon:'icons/css.svg', category: 'FRONTEND'},
    {name: 'HTML', icon:'icons/html5.svg', category: 'FRONTEND'},
    {name: 'MySQL', icon:'icons/mysql.svg', category: 'BACKEND'},
    {name: 'PostMan', icon:'icons/postman.svg', category: 'OTROS'},
    {name: 'Git', icon:'icons/git.svg', category: 'OTROS'},
    {name: 'GitHub', icon:'icons/github.svg', category: 'OTROS'},
    {name: 'SQL-Server', icon:'icons/sqlserver.svg', category: 'BACKEND'},
    {name: 'Jira', icon:'icons/jira.svg', category: 'OTROS'},
    {name: 'Figma', icon:'icons/figma.svg', category: 'OTROS'},
    {name: 'Elevenlabs (IA)', icon:'icons/elevenlabs.svg', category: 'OTROS'},
    {name: 'Python', icon:'icons/python.svg', category: 'BACKEND'},
    {name: 'Claude (IA)', icon:'icons/claude.svg', category: 'OTROS'},
    {name: 'Entity Framework', icon:'icons/entityframeworkcore.svg', category: 'BACKEND'},
    {name: 'OpenAI (IA)', icon:'icons/openai-light.svg', category: 'OTROS'},
    {name: 'Photoshop', icon:'icons/photoshop.svg', category: 'OTROS'},
    {name: 'Dapper', icon:'icons/dapper.svg', category: 'BACKEND'},
    {name: 'Azure', icon:'icons/azure.svg', category: 'OTROS'},


  ]);

}

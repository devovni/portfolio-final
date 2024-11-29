import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faToolbox, faCircleUser, faTerminal, faLayerGroup, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css'
})
export class SkillsCardComponent {
  faCode = faCode
  faTool = faToolbox
  faCircleUser = faCircleUser
  faTerminal = faTerminal
  faLayerGroup = faLayerGroup
  langImgPath = '/assets/logos/languages'
  frameworkImgPath = '/assets/logos/frameworks'
  toolImgPath = '/assets/logos/tools'

  languages = [
    {
      name: "Javascript",
      path: `${this.langImgPath}/js.svg`,
      alt: "js"
    }, {
      name: "C#",
      path: `${this.langImgPath}/c-sharp.svg`,
      alt: "c-sharp"
    }, {
      name: "Python",
      path: `${this.langImgPath}/python.svg`,
      alt: "Python"
    }, {
      name: "Html",
      path: `${this.langImgPath}/html.svg`,
      alt: "html"
    }, {
      name: "Css",
      path: `${this.langImgPath}/css.svg`,
      alt: "css"
    }, {
      name: "SQL",
      path: `${this.langImgPath}/sql.svg`,
      alt: "sql"
    }, {
      name: "Bash",
      path: `${this.langImgPath}/bash.svg`,
      alt: "bash"
    },
  ]

  frameworks = [
    {
      name: "Angular",
      path: `${this.frameworkImgPath}/angular.svg`,
      alt: "ng"
    }, {
      name: "TailwindCss",
      path: `${this.frameworkImgPath}/tailwind.svg`,
      alt: "tailwind"
    }, {
      name: "Bootstrap",
      path: `${this.frameworkImgPath}/bootstrap.svg`,
      alt: "bootstrap"
    }
  ]

  tools = [
    {
      name: "VsCode",
      path: `${this.toolImgPath}/vscode.svg`,
      alt: "vscode"
    }, {
      name: "Visual Studio",
      path: `${this.toolImgPath}/visual-studio.svg`,
      alt: "visual-studio"
    }, {
      name: "Git",
      path: `${this.toolImgPath}/git.svg`,
      alt: "git"
    }, {
      name: "Linux",
      path: `${this.toolImgPath}/tux.svg`,
      alt: "tux"
    }, {
      name: "Windows",
      path: `${this.toolImgPath}/windows.svg`,
      alt: "windows"
    }, {
      name: "Gimp",
      path: `${this.toolImgPath}/gimp.svg`,
      alt: "gimp"
    }
  ]

}

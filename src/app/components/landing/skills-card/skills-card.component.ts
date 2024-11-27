import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faToolbox, faCircleUser, faTerminal, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

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
  
}

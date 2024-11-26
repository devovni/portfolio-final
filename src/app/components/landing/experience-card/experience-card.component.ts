import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faToolbox, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  faCode = faCode
  faTool = faToolbox
  faCircleUser = faCircleUser
  
}

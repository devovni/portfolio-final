import { Component } from '@angular/core';
import { SwitchComponent } from "../switch/switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

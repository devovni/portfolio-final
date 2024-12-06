import { Component, inject } from '@angular/core';
import { SwitchComponent } from "../switch/switch.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router)
  
  public scrollToAnchroingPosition(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}

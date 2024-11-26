import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';


@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [HeroBannerComponent],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {

}

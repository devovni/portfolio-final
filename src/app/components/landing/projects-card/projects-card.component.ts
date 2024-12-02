import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
items = [{
  title: $localize `test 1`,
  description: $localize `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea itaque
                        necessitatibus
                        deserunt repudiandae sint cupiditate, magnam ipsam ipsa provident in? Expedita, in distinctio.
                        Reiciendis libero, maiores vero voluptas debitis soluta.`,
  image: "https://placehold.co/600x400"
},
{
  title: $localize `test 2`,
  description: $localize `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea itaque
                        necessitatibus
                        deserunt repudiandae sint cupiditate, magnam ipsam ipsa provident in? Expedita, in distinctio.
                        Reiciendis libero, maiores vero voluptas debitis soluta.`,
  image: "https://placehold.co/600x400"
}]
}

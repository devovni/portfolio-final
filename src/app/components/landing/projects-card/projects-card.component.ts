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
  title: "test 1",
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea itaque
                        necessitatibus
                        deserunt repudiandae sint cupiditate, magnam ipsam ipsa provident in? Expedita, in distinctio.
                        Reiciendis libero, maiores vero voluptas debitis soluta.`,
  image: "https://placehold.co/600x400"
},
{
  title: "test 2",
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea itaque
                        necessitatibus
                        deserunt repudiandae sint cupiditate, magnam ipsam ipsa provident in? Expedita, in distinctio.
                        Reiciendis libero, maiores vero voluptas debitis soluta.`,
  image: "https://placehold.co/600x400"
}]
}

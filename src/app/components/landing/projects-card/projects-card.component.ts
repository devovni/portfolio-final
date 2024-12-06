import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {

github = faGithub

items = [{
  title: $localize `ImgappDemo`,
  description: $localize `Un sitio clon de Reddit, con funcionalidad para subir imágenes, comentarios, respuestas y upvotes.`,
  image: "./assets/img/ImgappDemo.png",
  tech: ['C#', 'ASP.Net', 'EF Core', 'SQL'],
  link: 'https://github.com/devovni/ImgappDemo'
},
{
  title: $localize `JOJO API`,
  description: $localize `CRUD API hecha a modo de ejercicio usando personajes de jojo's bizarre adventure.`,
  image: "./assets/img/Swagger-UI.png",
  tech: ['C#', 'ASP.Net', 'Dapper', 'SQL'],
  link: 'https://github.com/devovni/jojoapi'
},
{
  title: $localize `Steam Chat Helper`,
  description: $localize `Uno de mis primeros proyectos: un chatbot y web scraper que busca artículos de wiki según lo que le pidas. Además, cuenta con funciones de recordatorios y alarmas.`,
  image: "./assets/img/chatbot.jpg",
  tech: ['Python', 'Batch'],
  link: 'https://github.com/devovni/Steam-bot'
}]

}

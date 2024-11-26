import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../../components/landing/experience-card/experience-card.component";
import { ProjectsCardComponent } from "../../components/landing/projects-card/projects-card.component";
import { HeaderComponent } from "../../components/shared/header/header.component";
import { PresentationCardComponent } from "../../components/landing/presentation-card/presentation-card.component";
import { AboutCardComponent } from "../../components/landing/about-card/about-card.component";
import { ContactCardComponent } from "../../components/landing/contact-card/contact-card.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { HeroBannerComponent } from '../../components/landing/hero-banner/hero-banner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ExperienceCardComponent, ProjectsCardComponent, HeaderComponent, PresentationCardComponent, AboutCardComponent, ContactCardComponent, FooterComponent, HeroBannerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

import { Component } from '@angular/core';
import { SkillsCardComponent } from "../../components/landing/skills-card/skills-card.component";
import { ProjectsCardComponent } from "../../components/landing/projects-card/projects-card.component";
import { HeaderComponent } from "../../shared/header/header.component";

import { AboutCardComponent } from "../../components/landing/about-card/about-card.component";
import { ContactCardComponent } from "../../components/landing/contact-card/contact-card.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeroBannerComponent } from '../../components/landing/hero-banner/hero-banner.component';
import { BackgroundComponent } from '../../shared/background/background.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SkillsCardComponent, ProjectsCardComponent, HeaderComponent, AboutCardComponent, ContactCardComponent, FooterComponent, HeroBannerComponent, BackgroundComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

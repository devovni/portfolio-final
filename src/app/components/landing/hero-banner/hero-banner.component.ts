import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
  @ViewChild('banner') banner: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    let text: string = 'Hello, world'
    let text2: string = 'Hello, I\'m Ignacio'
    let speed: Number = 150;

    await this.sleep(500)
    for (var i = 0; i < text.length; i++) {
      this.banner.nativeElement.textContent = text.substring(0, i + 1)
      await this.sleep(speed)
    }
    await this.sleep(500)

    for (var i = text.length; i > 6; i--) {
      this.banner.nativeElement.textContent = text.substring(0, i)
      await this.sleep(speed)
    }

    for (var i = 6; i < text2.length; i++) {
      this.banner.nativeElement.textContent = text2.substring(0, i + 1)
      await this.sleep(speed)
    }

  }

  sleep(delay: any): Promise<Function> {
    return new Promise((res) => setTimeout(res, delay))
  }

}

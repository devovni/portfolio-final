import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent implements OnInit {
  @ViewChild('banner') banner: ElementRef;

  async ngOnInit(): Promise<void> {
    let text: string = $localize`Hola, Mundo`
    let text2: string = $localize`Hola, Soy devOvni🛸`
    let speed: Number = 100;

    await this.sleep(500)
    for (var i = 0; i < text.length; i++) {
      this.banner.nativeElement.textContent = text.substring(0, i + 1)
      await this.sleep(speed)
    }
    await this.sleep(500)

    for (var i = text.length; i > 0; i--) {
      if (text[i] === ',') break;
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

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit {
  starFields :Array<Array<Star>>= [];
  
  ngOnInit(): void {

    for (let field = 0; field < 3; field++) {
      let star :Array<Star> = []

      for (let stars = 0; stars < 200; stars++) {
        star.push(new Star(this.randomAxis(), this.randomAxis(), this.randomRadious()))
      }
      this.starFields.push(star)
    }
  }

  randomAxis(): string {
    return Math.round(Math.random() * 100) + '%';
  }

  randomRadious(): number {
    return Math.round((Math.random() + 0.5) * 10) / 10;
  }


}

class Star{
  x :string;
  y :string;
  r :number;
  constructor(x: string, y :string, r:number)
  {
    this.x = x
    this.y = y
    this.r = r

  }
}

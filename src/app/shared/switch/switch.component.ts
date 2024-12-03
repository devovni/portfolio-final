import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'

})

export class SwitchComponent implements AfterViewInit {

  @ViewChild("switch") inputTag: any;
  

  ngAfterViewInit(): void {
    if(!localStorage['darkMode'])
    {
      localStorage['darkMode'] = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.inputTag.nativeElement.checked = localStorage['darkMode'] === 'true'
    
    document.documentElement.classList.toggle('dark', this.inputTag.nativeElement.checked)

  }

  toggle() {

    document.documentElement.classList.toggle('dark', this.inputTag.nativeElement.checked)
    localStorage['darkMode'] = this.inputTag.nativeElement.checked
    console.log(`local storage is ${localStorage['darkMode']}`)
    console.log(`should be ${this.inputTag.nativeElement.checked}`)
  }
}

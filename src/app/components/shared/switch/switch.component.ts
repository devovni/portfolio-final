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
    localStorage['darkMode'] = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    document.documentElement.classList.toggle('dark', localStorage['darkmode']  || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))

    this.inputTag.nativeElement.checked = localStorage['darkMode']
  }

  toggle() {
    document.documentElement.classList.toggle('dark', this.inputTag.checked)
  }
}

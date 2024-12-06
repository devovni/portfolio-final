import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faPaperPlane, faCircleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { ModalService, } from 'ngx-modal-ease'
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  modalservice = inject(ModalService)
  userIcon = faUser
  envelope = faEnvelope
  github = faGithub
  linkedin = faLinkedin
  send = faPaperPlane
  check = faCheck
  exclamation = faCircleExclamation

  http = inject(HttpClient)
  formBuilder = inject(FormBuilder)


  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    // _gotcha: '',

  })

  submit() {

    console.warn(this.form.value)
    this.http.post('https://formspree.io/f/xgvenyor', this.form.value, { headers: { 'Accept': 'application/json' } }).subscribe({
      next: () => this.modalservice.open(
        ContactModalComponent, {
        modal: {
          // animation
          enter: 'fade-in 0.1s ease-out',
        },
        overlay: {
          // animation
          leave: 'fade-out 0.3s',
        },
        size: {
          // modal configuration
          // height: '100%',
          width: '100%'
        }
      })
    })

  }

}

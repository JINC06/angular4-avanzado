import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    title = 'Contacto';
    emailContacto: string;

    ngOnInit(): void {
        console.log('contact.component cargado');
    }

    guardarEmail() {
        localStorage.setItem('emailContacto', this.emailContacto);
    }

}

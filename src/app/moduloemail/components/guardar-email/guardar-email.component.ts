import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'guardar-email',
  template: `
        <h4>{{title}}</h4>
        <input type="text" [(ngModel)]="emailContacto" />
        <button (click)="guardarEmail()" >Guardar</button>
  `
})
export class GuardarEmailComponent {

    title = 'Guardar email';
    emailContacto: string;

    guardarEmail() {
        localStorage.setItem('emailContacto', this.emailContacto);
    }

}

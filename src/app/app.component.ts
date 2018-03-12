import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {

  title = 'NGZOO';
  emailContacto: string;

  // se ejecuta cada evento dentro de la pagina
  ngDoCheck(): void {
    console.log('El DoCheck se ha ejecutado');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}

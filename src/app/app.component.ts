import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';

  // se ejecuta cada evento dentro de la pagina
  ngDoCheck(): void {
    console.log('El DoCheck se ha ejecutado');
  }
}

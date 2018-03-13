import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-email',
  template: `
        <div class="panel panel-default" >
          <h2>{{title}}</h2>
          <hr/>
          <mostrar-email></mostrar-email>
          <guardar-email></guardar-email>
        <div>
  `
})
export class MainEmailComponent implements OnInit {

  title = 'Modulo de email';

  ngOnInit(): void {
    console.log('Componente principal del moduloemail cargado');
  }

}

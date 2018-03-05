import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo;

    constructor() {
        this.titulo = 'Esta es la tienda';
    }
}

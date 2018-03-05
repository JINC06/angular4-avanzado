import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor() {
        this.titulo = 'Esta es la tienda';
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event;
    }
}

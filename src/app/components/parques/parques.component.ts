import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent {
    public nombre:  string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }
}

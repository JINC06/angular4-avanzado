import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges {
    
    @Input() nombre:  string;
    @Input('metros_cuadrados') metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = false;
    }

    // Este evento pasa cuando se hace un cambio en las propiedas del componente
    ngOnChanges(changes: SimpleChanges): void {
        //console.log(changes);
        console.log("Existen cambios en las propiedades");
    }

    emitirEvento(){
        this.pasameLosDatos.emit({ 
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
         });
    }
}

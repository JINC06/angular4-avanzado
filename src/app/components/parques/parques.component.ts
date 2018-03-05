import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'parques',
    templateUrl: './parques.component.html',
    styleUrls: ['./parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck {
    
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

    //Cuando se carga la directiva cuando es lanzado solo se hace una vez
    ngOnInit(): void {
        console.log('Metodo on init lanzado');
    }

    // se ejecuta cada evento dentro de la pagina
    ngDoCheck(): void {
        //console.log('El DoCheck se ha ejecutado');
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

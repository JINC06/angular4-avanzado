import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.2)'
            })),
            transition('inactive => active', animate('300ms linear')),
            transition('active => inactive', animate('300ms linear'))
        ])
     ]
})

export class TiendaComponent implements OnInit {

    public titulo;
    public nombreDelParque: string;
    public miParque;
    public state;

    constructor() {
        this.titulo = 'Esta es la tienda';
        this.state = 'inactive';
    }

    ngOnInit(): void {
        $('#textjq').hide();
        $('#botonjq').click(function(){
            console.log('click desde jquery');
            $('#textjq').slideToggle();
        });

        $('#caja').dotdotdot({});
    }

    cambiarEstado(status) {
        if (status === 'inactive') {
            this.state = 'active';
        } else {
            this.state = 'inactive';
        }
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }

    verDatosParque(event) {
        console.log(event);
        this.miParque = event;
    }

    textRichEditor(content) {
        console.log(content);
    }
}

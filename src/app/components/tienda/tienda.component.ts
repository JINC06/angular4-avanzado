import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {

    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor() {
        this.titulo = 'Esta es la tienda';
    }

    ngOnInit(): void {
        $('#textjq').hide();
        $('#botonjq').click(function(){
            console.log('click desde jquery');
            $('#textjq').slideToggle();
        });

        $('#caja').dotdotdot({});
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

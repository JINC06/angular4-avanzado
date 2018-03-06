import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'animals',
    templateUrl: './animals.component.html'
})

export class AnimalsComponent implements OnInit {
    
    title = 'Animales';

    //Cuando se carga la directiva cuando es lanzado solo se hace una vez
    ngOnInit(): void {
        console.log('Metodo on init lanzado');
    }

}

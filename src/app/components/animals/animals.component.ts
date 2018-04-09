import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fadeIn } from '../animations';

import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'animals',
    templateUrl: './animals.component.html',
    providers: [ AnimalService ],
    animations: [ fadeIn ]
})

export class AnimalsComponent implements OnInit {

    public title: string;
    public animals: Animal[];
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _animalService: AnimalService
      ) {
        this.title = 'Animales';
        this.url = GLOBAL.url;
      }

    // Cuando se carga la directiva cuando es lanzado solo se hace una vez
    ngOnInit(): void {
        console.log('Metodo on init lanzado');
        this.getAnimals();
    }

    getAnimals() {
        this._animalService.getAnimals().subscribe(
            response => {
            if (response.animals) {
                this.animals = response.animals;
            }
            },
            error => {
            console.log(<any>error);
            }
        );
    }

}

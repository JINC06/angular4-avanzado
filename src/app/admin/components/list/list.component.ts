import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';

import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service'

import { fadeLateral } from '../../animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [ AnimalService, UserService ],
  animations: [ fadeLateral ]
})
export class ListComponent implements OnInit {

  public title: string = 'Listado';
  public url: string;
  // numbers = [0, 1, 2, 3, 4, 5];
  public numbers = new Array(10);
  public animals: Animal[];
  public token;
  public search;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService  
  ) {
    this.title = 'Listado';
    this.url = GLOBAL.url;
    this.token = this._userService.getToken();
  }

  ngOnInit() {
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

  deleteAnimal(id) {
    $('#myModal-'+id).modal('hide');
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if (!response) {
          alert('Error en el servidor');
        } else {
          this.getAnimals();
        }
      },
      error => {
        alert('Error en el servidor');
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fadeIn } from '../animations';

import { GLOBAL } from '../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers: [ UserService ],
  animations: [ fadeIn ]
})
export class KeepersComponent implements OnInit {

    public title: string;
    public keepers: User[];
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Cuidadores';
        this.url = GLOBAL.url;
    }

    ngOnInit(): void {
        console.log('keepers.component cargado');
        this.getKeepers();
    }

    getKeepers() {
        this._userService.getKeepers().subscribe(
            response => {
            if (response.users) {
                this.keepers = response.users;
            }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}

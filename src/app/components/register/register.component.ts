import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

// servicios
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [ UserService ]
})
export class RegisterComponent implements OnInit {
    public title: String;
    public user: User;
    public status: String;

    constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
        this.title = 'Registro';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
        this.status = '';
    }

    ngOnInit(): void {
        console.log('register.component cargando');
    }

    onSubmit(registerForm) {
        this._userService.register(this.user).subscribe(
            response => {
                if (response.user && response.user._id) {
                    this.status = 'success';
                    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
                    registerForm.reset();
                } else {
                    this.status = 'error';
                }
            },
            err => {
                console.log(<any>err);
                this.status = 'error';
            }
        );
    }
}

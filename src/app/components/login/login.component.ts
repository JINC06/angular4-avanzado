import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [ UserService ]
})
export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: String;
    public errorMessageLogin: String;

    constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
        this.title = 'Login';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit(): void {
        console.log('login.component cargando');
        console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());
    }

    onSubmit() {
        // loguear al usuario y conseguir el objecto limpio
        this._userService.signUp(this.user).subscribe(
            response => {
                this.identity = response.user;

                if (!this.identity || !this.identity._id) {
                    alert('El usuario no se ha logueado correctamente');
                } else {
                    this.identity.password = '';
                    // si todo bien
                    localStorage.setItem('identity', JSON.stringify(this.identity));

                    // get the token
                    this._userService.signUp(this.user, 'true').subscribe(
                        responseToken => {
                            this.token = responseToken.token;
                            if (this.token.length <= 0) {
                                alert('El token no se ha generado');
                            }else {
                                // mostrar el token
                                localStorage.setItem('token', this.token);
                                this.status = 'success';

                                this._router.navigate(['/']);
                            }
                        },
                        err => {
                            console.log(<any>err);
                        }
                    );

                }
            },
            error => {
                const errorMessage = <any>error;
                if (errorMessage != null) {
                    const body = JSON.parse(error._body);
                    this.errorMessageLogin = body.message;
                    this.status = 'error';
                }
            }
        );
    }
}

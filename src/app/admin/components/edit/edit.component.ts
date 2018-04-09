import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';

import { UserService } from '../../../services/user.service'
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';

import { fadeLateral } from '../../animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [ UserService, AnimalService, UploadService ],
  animations: [ fadeLateral ]
})
export class EditComponent implements OnInit {

  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url;
  public status;
  public filesToUpload: Array<File>;
  public isEdit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.isEdit = true;
    this.title = 'Editar';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.animal = new Animal('', '', '', 2018, '', '');
  }

  ngOnInit(): void {
    console.log('animal.add.component init');
    this.getAnimal();
  }

  onSubmit() {
    const id = this.animal._id;
    this._animalService.editAnimal(this.token, id, this.animal).subscribe(
      response => {
        if (!response) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          if(this.filesToUpload && this.filesToUpload.length > 0)
          {

            this._uploadService.makeFileRequest(
                this.url + '/upload-image-animal/' + this.animal._id,
                [],
                this.filesToUpload,
                this.token,
                'image'
            ).then(
                (result: any) => {
                    if (result) {
                      this.animal.image = result.image;
                      this._router.navigate(['/animal', this.animal._id]);
                    }
                }
            ).catch((error) => {
                console.log(error);
                this._router.navigate(['/animal', this.animal._id]);
            });

          } else {
            this._router.navigate(['/animal', this.animal._id]);
          }
          
        }
      },
      error => {
        var errorMessage = <any> error;
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    console.log(this.filesToUpload);
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
        let id = params['id'];
        this._animalService.getAnimal(id).subscribe(
            response => {
                if (!response.animal) {
                    this._router.navigate(['/']);
                } else {
                    this.animal = response.animal;
                }
            },
            error => {
                //console.log(<any>error);
                this._router.navigate(['/']);
            }
        );
    });
  }

}

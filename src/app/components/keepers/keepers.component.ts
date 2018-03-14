import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [ fadeIn ]
})
export class KeepersComponent implements OnInit {

    title = 'Ciudadores';

    ngOnInit(): void {
        console.log('keepers.component cargado');
    }

}

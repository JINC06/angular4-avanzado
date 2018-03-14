import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [ fadeIn ]
})
export class HomeComponent implements OnInit {

    title = 'Home';

    ngOnInit(): void {
        console.log('home.component cargado');
    }

}

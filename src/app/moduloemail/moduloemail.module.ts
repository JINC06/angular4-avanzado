// importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

// generar el nuevo modulo con un array de configuracion decorar ngModule
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [ MainEmailComponent ],
})

export class ModuloEmailModule {

}

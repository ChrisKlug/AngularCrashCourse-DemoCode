import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InsultsService } from './insults.service'
import { InsultsComponent } from './insults.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        InsultsComponent
    ],
    providers: [
        InsultsService
    ],
    exports: [
        InsultsComponent
    ]
})
export class InsultsModule { }
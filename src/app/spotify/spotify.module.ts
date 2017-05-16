import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SpotifySearchComponent } from './spotify-search.component';
import { ArtistsDisplayComponent } from './artist-display.component';
import { SpotifyService } from './spotify.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpotifySearchComponent,
        ArtistsDisplayComponent
    ],
    exports: [
        SpotifySearchComponent
    ],
    providers: [
        SpotifyService
    ]
})
export class SpotifyModule {}
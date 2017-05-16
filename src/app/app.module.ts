import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpotifyModule } from './spotify/spotify.module';
import { InsultsModule } from './insults/insults.module';

import { AppComponent } from './app.component';

import { RouterModule, Route } from '@angular/router';
import { SpotifySearchComponent } from "./spotify/spotify-search.component"
import { InsultsComponent } from "./insults/insults.component"

var routes: Route[] = [
  { path: "spotify", component: SpotifySearchComponent },
  { path: "insults", component: InsultsComponent },
  { path: "", redirectTo: "/spotify", pathMatch: "full" },
  { path: "**", redirectTo: "/spotify", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpotifyModule,
    InsultsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

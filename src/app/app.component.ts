import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/spotify" routerLinkActive="active">Spotify</a>
            <a routerLink="/insults" routerLinkActive="active">Insults</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = "Hello VS Live!!!";
}
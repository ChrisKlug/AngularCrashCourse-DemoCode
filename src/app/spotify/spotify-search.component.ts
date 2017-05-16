import { Component } from '@angular/core';

import {SpotifyService, IArtist} from './spotify.service';

@Component({
    selector: 'spotify-search',
    templateUrl: './spotify-search.component.html'
})
export class SpotifySearchComponent {
    constructor(private spotify: SpotifyService) {}

    async search(query: string) {
        this.artists = await this.spotify.searchArtists(query);
    }

    artistSelected(artist: IArtist) {
        alert("You selected\r\n" + artist.name);
    }

    artists: IArtist[];
}
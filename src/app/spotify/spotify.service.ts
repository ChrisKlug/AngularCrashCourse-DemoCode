import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {}

    searchArtists(query: string) : Promise<IArtist[]> {
        return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=artist`)
            .toPromise()
            .then<any>(response => response.json())
            .then(json => json.artists.items);
    }
}

export interface IArtist {
    id: string;
    name: string;
    images: IImage[]
}

export interface IImage {
    height: number;
    width: number;
    url: string;
}
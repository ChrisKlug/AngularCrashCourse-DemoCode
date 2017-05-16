import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IArtist, IImage } from './spotify.service';

@Component({
    selector: "artist-display",
    template: `
        <div *ngIf="artist">
            <img *ngIf="image" [src]="image.url" (click)="onClick(artist)" />
            <em>{{artist.name}}</em>
        </div>
    `
})
export class ArtistsDisplayComponent {
    private _artist: IArtist;

    onClick(artist: IArtist) {
        this.onSelect.emit({ artist: artist });
    }

    @Output() onSelect = new EventEmitter<any>();
    @Input() set artist(artist: IArtist) {
        this.image = null;
        this._artist = artist;
        if (artist && artist.images) {
            var img = artist.images[0];
            artist.images.forEach(x => {
                if (x.height < img.height) {
                    img = x;
                }
            });
            this.image = img;
        }
    }
    get artist() {
        return this._artist;
    }
    image: IImage;
}
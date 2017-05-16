import { Component, OnInit } from '@angular/core';

import { InsultsService } from './insults.service'

@Component({
    selector: 'insult-generator',
    template: `
    <h2 *ngIf='insult'>{{insult}}</h2>
    <button (click)='getInsult()'>Get Insult</button>
  `
})
export class InsultsComponent implements OnInit {
    constructor(private insultsService: InsultsService) { }

    getInsult() {
        this.insult = this.insultsService.getRandomInsult();
    }
    ngOnInit() {
        this.getInsult();
    }

    insult: string;
}
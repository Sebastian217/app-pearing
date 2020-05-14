import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    activateAuthentGoogle: boolean;
    activateChat: boolean;

    constructor() {
        this.activateAuthentGoogle = false;
        this.activateChat = false;
    }

    ngOnInit() {
    }

    validateClick(event) {
        switch (event) {
            case 'pse':

                break;
            case 'curso':
                this.activateChat = true;
                this.activateAuthentGoogle = true;
                break;
            case 'chat':
                this.activateAuthentGoogle = true;
                break;
            default:
                break;
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalytics } from '../../resources/google-Analytics.resource';
@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {

    headers: any[];
    body: any[];
    showInfo: boolean;
    showInfoSuccess: boolean;
    showInfoValidInput: boolean;

    constructor(private router: Router) {
        this.headers = [];
        this.body = [];
        this.showInfo = false;
        this.showInfoSuccess = false;
        this.showInfoValidInput = true;
    }

    ngOnInit() {
        this.headers = [
            {
                id: 'Cedula de Ciudadania'
            },
            {
                id: 'Nombres'
            },
            {
                id: 'Apellidos'
            },
            {
                id: 'Descripcion'
            },
            {
                id: 'Precio'
            }
        ];

        this.body = [
            {
                id: '1010046579',
                name: 'David Santiago',
                lastaName: 'Arias Acosta',
                apearing: 'Pasar semaforos en rojo y atropellar Perros',
                money: '$78,615'
            },
            {
                id: '1010046579',
                name: 'David Santiago',
                lastaName: 'Arias Acosta',
                apearing: 'Pasar semaforos en rojo y atropellar Perros',
                money: '$78,615'
            },
            {
                id: '1010046579',
                name: 'David Santiago',
                lastaName: 'Arias Acosta',
                apearing: 'Pasar semaforos en rojo y atropellar Perros',
                money: '$78,615'
            },
            {
                id: '1010046579',
                name: 'David Santiago',
                lastaName: 'Arias Acosta',
                apearing: 'Pasar semaforos en rojo y atropellar Perros',
                money: '$78,615'
            },
            {
                id: '1010046579',
                name: 'David Santiago',
                lastaName: 'Arias Acosta',
                apearing: 'Pasar semaforos en rojo y atropellar Perros',
                money: '$78,615'
            }
        ];
    }

    verifyData(numberId) {
        if (numberId === '1010046579') {
            this.showInfo = true;
            this.showInfoSuccess = false;
            GoogleAnalytics.sendEventFirebase('ga_event', 'FIND_INFO', '101004679', 'pearings');
        } else {
            this.showInfo = false;
            this.showInfoSuccess = true;
            GoogleAnalytics.sendEventFirebase('ga_event', 'FIND_INFO', `${ numberId }`, 'pearings');
        }
    }

    validateInfoAlert(event, numberId) {
        this.validateInputEmpty(event['target'].value);
        this.validateSpace(event.code, numberId);
    }

    validateSpace(space: string, numberId) {
        if (space.toUpperCase() == 'ENTER') {
            return this.verifyData(numberId);
        }
    }
    validateInputEmpty(contentInput: string) {
        if (contentInput.length < 1) {
            this.showInfoSuccess = false;
            this.showInfo = false;
            return this.showInfoValidInput = true;
        } else {
            return this.showInfoValidInput = false;
        }
    }

    showOptions() {
        this.router.navigateByUrl('/maps');
    }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Stranka} from './models/stranka';
import {StrankaService} from './services/Stranka.service';

@Component({
    moduleId: module.id,
    selector: 'vse-stranke',
    templateUrl: 'stranke-component.html'
})
export class StrankeComponent implements OnInit {
    stranke: Stranka[];


    constructor(private strankeService: StrankaService,
                private router: Router) {
    }

    getStranke(): void {
        this.strankeService
            .getStranke()
            .then(stranke => this.stranke = stranke);
    }

    ngOnInit(): void {
        this.getStranke();
    }

    naPodrobnosti(stranka: Stranka): void {
        this.router.navigate(['/stranke', stranka.idstranka]);
    }

}

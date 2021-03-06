import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Stranka} from './models/stranka';
import {StrankaService} from './services/Stranka.service';

@Component({
    moduleId: module.id,
    selector: 'stranka-podrobnosti',
    templateUrl: 'stranka-podrobnosti.component.html'
})
export class StrankaPodrobnostiComponent implements OnInit {
    stranka: Stranka;

    constructor(private strankaService: StrankaService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.stranka = JSON.parse(localStorage.getItem('stranka')) as Stranka;
    }

    nazaj(): void {
        this.router.navigate(['/prodajalec/stranke']);
    }

    posodobi(): void {
        this.router.navigate(['/prodajalec/stranke/posodobi']);
    }

    zbrisi(): void {
        this.strankaService.delete(this.stranka.idstranka);
        localStorage.removeItem('stranka');
        this.router.navigate(['/prodajalec/stranke']);
    }

    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }
}

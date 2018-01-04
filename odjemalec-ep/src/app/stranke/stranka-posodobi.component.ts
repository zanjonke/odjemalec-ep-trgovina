import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Stranka} from "./models/stranka";
import {StrankaService} from "./services/Stranka.service";


@Component({
    moduleId: module.id,
    selector: 'stranka-posodobi.component',
    templateUrl: 'stranka-posodobi.component.html'
})
export class StrankaPosodobiComponent implements OnInit {
    stranka: Stranka;
    pravice: boolean;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private strankaService: StrankaService) {
    }

    ngOnInit(): void {
        this.stranka = JSON.parse(localStorage.getItem('stranka')) as Stranka;
        this.pravice = JSON.parse(localStorage.getItem('pravice')) as boolean;
    }

    nazaj(): void {
        this.location.back();
    }

    posodobi(): void {
        this.strankaService.update(this.stranka);
        localStorage.setItem('stranka', JSON.stringify(this.stranka));
        this.router.navigate(['/prodajalec/stranke/podrobnosti']);
    }

}

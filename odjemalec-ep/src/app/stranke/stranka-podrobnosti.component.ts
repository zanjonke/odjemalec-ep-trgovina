import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
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
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.strankaService.getStranka(+params['id']))
            .subscribe(stranka => this.stranka = stranka);
    }

    nazaj(): void {
        this.location.back();
    }
}

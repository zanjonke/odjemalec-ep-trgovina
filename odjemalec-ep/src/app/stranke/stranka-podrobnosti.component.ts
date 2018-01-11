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
    stanje: string;
    checked: string;
    constructor(private strankaService: StrankaService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.stranka = JSON.parse(localStorage.getItem('stranka')) as Stranka;
        if(this.stranka.aktiviran === "0" || this.stranka.aktiviran === null){
          this.stanje = "Aktiviraj";
        } else {
            this.stanje = "Deaktiviraj";
            this.checked = "checked";
        }
    }

    zamenjaj(): void {
        if (this.stanje == 'Aktiviraj') {
            this.stanje = 'Deaktiviraj';
            this.stranka.aktiviran = "1";
        } else {
            this.checked="checked";
            this.stanje = 'Aktiviraj';
            this.stranka.aktiviran = "0";

        }
        this.strankaService.update(this.stranka);
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
}

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
    stanje: string;
    checked: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private strankaService: StrankaService) {
    }

    ngOnInit(): void {
        this.stranka = JSON.parse(localStorage.getItem('stranka')) as Stranka;
        if(this.stranka.aktiviran == 0 || this.stranka.aktiviran == null){
          this.stanje = "Aktiviraj";
        } else {
            this.stanje = "Deaktiviraj";
            this.checked = "checked";
        }
    }

    zamenjaj(): void {
        if (this.stanje == 'Aktiviraj') {
            this.stanje = 'Deaktiviraj';
            this.stranka.aktiviran = 1;
        } else {
            this.checked= "checked";
            this.stanje = 'Aktiviraj';
            this.stranka.aktiviran = 0;
        }
    }

    nazaj(): void {
        this.location.back();
    }

    posodobi(): void {
        if (this.stranka.geslo != '' && this.stranka.geslo != null) {
            console.log(this.stranka)
            this.strankaService.update(this.stranka);
            localStorage.setItem('stranka', JSON.stringify(this.stranka));
            this.router.navigate(['/prodajalec/stranke/podrobnosti']);
        }
    }

    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }

}

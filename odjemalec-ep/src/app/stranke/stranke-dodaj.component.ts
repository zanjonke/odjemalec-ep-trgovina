import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Stranka} from "./models/stranka";
import {StrankaService} from "./services/Stranka.service";

@Component({
    moduleId: module.id,
    selector: 'stranke-dodaj.component',
    templateUrl: 'stranke-dodaj.component.html'
})
export class StrankaDodajComponent implements OnInit {
    stranka: Stranka;


    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private strankaService: StrankaService) {
    }

    ngOnInit(): void {
        this.stranka = new Stranka();
        this.stranka.ime = '';
        this.stranka.priimek = '';
        this.stranka.email = '';
        this.stranka.geslo = '';
        this.stranka.aktiviran = "0";
        this.stranka.naslov = '';
        this.stranka.telefon = '';
    }

    print(stranka: Stranka): void {
        console.log(stranka.idstranka + ' id stranke');
        console.log(stranka.ime + ' ime');
        console.log(stranka.priimek + ' priimek');
        console.log(stranka.email + ' email');
        console.log(stranka.naslov + ' naslov');
        console.log(stranka.telefon + ' telefon');
        console.log(stranka.aktiviran + ' aktiviran');
    }

    nazaj(): void {
        this.location.back();
    }

    neki(): void {
        this.print(this.stranka);
        this.strankaService.create(this.stranka).then(resp => {
            this.router.navigate(['/prodajalec/stranke']);
        });
    }

}

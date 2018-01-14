import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Artikel} from "./models/artikel";
import {ArtikelService} from "./services/artikel.service";


@Component({
    moduleId: module.id,
    selector: 'artikli-dodaj.component',
    templateUrl: 'artikli-dodaj.component.html'
})

export class ArtikliDodajComponent implements OnInit {
    artikel: Artikel;

    constructor(private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private prodajalecService: ArtikelService) {
    }

    ngOnInit(): void {

    }

    nazaj(): void {
        this.location.back();
    }

    posodobi(): void {
        
    }
}
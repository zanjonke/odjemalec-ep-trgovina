import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Artikel} from "./models/artikel";
import {ArtikelService} from "./services/artikel.service";


@Component({
    moduleId: module.id,
    selector: 'artikli-posodobi.component',
    templateUrl: 'artikli-posodobi.component.html'
})

export class ArtikliPosodobiComponent implements OnInit {
    artikel: Artikel;
    checked: boolean;

    constructor(private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private artikelService: ArtikelService) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.artikelService.getArtikel(+params["id"]))
            .subscribe(artikel => this.artikel = artikel)
    }

    nazaj(): void {
        this.location.back();
    }

    putActivity(tr: Event) {
        if (this.artikel.aktiviran == 0) {
            this.artikel.aktiviran = 1;
        } else {
            this.artikel.aktiviran = 0;
        }
        console.log(this.artikel.aktiviran)
    }

    posodobi(): void {
        this.artikelService.update(this.artikel)
        this.location.back();
    }
}
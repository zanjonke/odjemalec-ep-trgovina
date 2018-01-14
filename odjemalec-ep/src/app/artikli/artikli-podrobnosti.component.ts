import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';

@Component({
    moduleId: module.id,
    selector: 'artikli-podrobnosti',
    templateUrl: 'artikli-podrobnosti.component.html'
})
export class ArtikliPodrobnostiComponent implements OnInit {
    artikel: Artikel;

    constructor(private artikelService: ArtikelService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.artikelService.getArtikel(+params['id']))
            .subscribe(artikel => this.artikel = artikel);
    }

    nazaj(): void {
        this.router.navigate(['/artikli']);
    }

    posodobi(): void {
        this.router.navigate(['/prodajalec/artikli/'+ this.artikel.idartikel +'/posodobi']);
    }

    zbrisi(): void {
        this.artikelService.delete(this.artikel.idartikel);
        this.router.navigate(['/artikli']);
    }

    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }
}

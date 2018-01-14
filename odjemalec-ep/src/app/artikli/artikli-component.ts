import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-artikli',
    templateUrl: 'artikli-component.html'
})
export class ArtikliComponent implements OnInit {
    artikli: Artikel[];


    constructor(private artikliService: ArtikelService,
                private router: Router) {
    }

    getArtikli(): void {
        this.artikliService
            .getArtikli()
            .then(artikli => this.artikli = artikli);
    }

    getArtikliAktivirani(): void {
        this.artikliService
            .getArtikliAktivirani()
            .then(artikli => this.artikli = artikli);
    }
    
    ngOnInit(): void {
        if (localStorage.getItem("jeProdajalec") === "true") {
            this.getArtikli()
        } else {
            this.getArtikliAktivirani()
        }
    }

    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }

    naPodrobnosti(id: number): void {
        this.router.navigate(['/artikli', id]);
    }

    putActivity(tr: Event, art: Artikel) {
        if (art.aktiviran == 0) {
            art.aktiviran = 1;
        } else {
            art.aktiviran = 0;
        }
        console.log(art.aktiviran)
        this.artikliService.update(art)
    }

    dodaj(): void {
        this.router.navigate(['/prodajalec/artikli/dodaj']);
    }

}

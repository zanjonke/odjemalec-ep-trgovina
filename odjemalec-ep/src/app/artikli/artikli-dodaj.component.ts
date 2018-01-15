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
        private artikelService: ArtikelService) {
    }

    ngOnInit(): void {
        this.artikel = new Artikel();
        this.artikel.naziv = '';
        this.artikel.opis = '';
        this.artikel.cena = 0;
        this.artikel.aktiviran = 0;
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
        if (this.artikel.naziv != '' &&
            this.artikel.cena != null) {
            this.artikelService.create(this.artikel).then(resp => {
                this.router.navigate(['/artikli']);
            })
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
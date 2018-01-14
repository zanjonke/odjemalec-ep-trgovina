import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Artikel} from './models/artikel';
import {Ocene} from './models/ocena';
import {Kosarica} from './models/kosarica';
import {ArtikelService} from './services/artikel.service';
import {OceneService} from './services/ocene.service';
import {KosaricaService} from './services/kosarica.service';


@Component({
    moduleId: module.id,
    selector: 'artikli-podrobnosti',
    templateUrl: 'artikli-podrobnosti.component.html'
})
export class ArtikliPodrobnostiComponent implements OnInit {
    artikel: Artikel;
    ocena: number = null;
    selectedValue: number;
    ratings: number[] = [1,2,3,4,5];
    idStr: number;
    kosarica: Kosarica[];
    jeDodano: boolean;

    constructor(private artikelService: ArtikelService,
                private oceneService: OceneService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private kosaricaService: KosaricaService) {
    }

    ngOnInit(): void {
        let id: number;
        let sel: number;
        let sub = this.route.params.subscribe(params => {
            id = +params['id'];
        })
        let str = JSON.parse(localStorage.getItem('me'));
        this.oceneService
            .getAll()
            .then(data => {
                data.forEach( (element) => {
                    if (id == element.idartikel_ocene &&
                        str.idstranka == element.idstranka_ocene) {
                            this.ocena = element.ocena
                    }
                })
        })
        this.artikelService.getArtikel(id)
            .then(data1 => {
                this.artikel = data1
            })
        this.idStr = str.idstranka

        this.kosaricaService
            .getKosarica(str.idstranka)
            .then(data => this.kosarica = data)
    }

    nazaj(): void {
        this.router.navigate(['/artikli']);
    }

    posodobi(): void {
        this.router.navigate(['/prodajalec/artikli/'+ this.artikel.idartikel +'/posodobi']);
    }

    oceni(): void {
        if (this.ocena != null) {
            this.oceneService.update(this.artikel.idartikel, this.idStr, this.selectedValue)
        } else {
            this.oceneService.create(this.artikel.idartikel, this.idStr, this.selectedValue)
        }
    }

    vKosarico(): any {
        let put = false
        this.kosarica.forEach( (element) => {
            if (this.artikel.idartikel == element.idartikel_kosarica) {
                put = true
                let newKolicina: number = +element.kolicina + 1
                this.kosaricaService.update(this.artikel.idartikel, this.idStr, newKolicina)
            }
        })
        if (!put){
            this.kosaricaService.create(this.artikel.idartikel, this.idStr, 1)
        }
        this.jeDodano = true
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

    jeStranka(): boolean {
        if (localStorage.getItem("jeStranka") === "true") {
            return true;
        } else {
            return false;
        }
    }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';
import {KosaricaService} from './services/kosarica.service';
import { Kosarica } from './models/kosarica';

@Component({
    moduleId: module.id,
    selector: 'kosarica',
    templateUrl: 'kosarica-component.html'
})
export class KosaricaComponent implements OnInit {
    artikli: Artikel[];
    kosarica: Kosarica[];
    strankaId: number;

    constructor(private artikliService: ArtikelService,
                private kosaricaService: KosaricaService,
                private router: Router) {
    }

    ngOnInit() {
        let artikli: Artikel[] = []
        let str = JSON.parse(localStorage.getItem('me'));
        this.strankaId = str.idstranka
        this.kosaricaService
            .getKosarica(str.idstranka)
            .then(data => {
                this.kosarica = data
                data.forEach( (element) => {
                    this.artikliService
                        .getArtikel(element.idartikel_kosarica)
                        .then(artikel => {
                            console.log(element.kolicina)
                            if (element.kolicina != 0){
                                artikel.kolicina = element.kolicina
                                artikli.push(artikel)
                            } 
                            
                        })
                })
                this.artikli = artikli
            })
    }

    update(art: Artikel): void {
        this.kosaricaService.update(art.idartikel, this.strankaId, art.kolicina)
    }

    zbrisi(art: Artikel): void {
        this.kosaricaService.update(art.idartikel, this.strankaId, 0)
        this.artikli = this.artikli.filter(obj => obj !== art)
    }

    oddaj(): void {
        console.log("TODO")
    }

    get skupnaCena() {
        if (this.artikli){
            let cena: number = 0
            this.artikli.forEach((element) => {
                cena += element.kolicina * element.cena
            })
            return Math.round(cena * 100)/100
        } else {
            return 0
        }

    }
}
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


    ngOnInit(): void {
        this.getArtikli();
    }

    login(): void {
        this.router.navigate(['/login']);
    }

    naPodrobnosti(id: number): void {
        this.router.navigate(['/artikli', id]);
    }

}

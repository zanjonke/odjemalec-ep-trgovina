import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Prodajalec} from "./models/prodajalec";
import {ProdajalecService} from "./services/prodajalec.service";


@Component({
    moduleId: module.id,
    selector: 'prodajalci-dodaj.component',
    templateUrl: 'prodajalci-dodaj.component.html'
})
export class ProdajalecDodajComponent implements OnInit {
    prodajalec: Prodajalec;


    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private prodajalecService: ProdajalecService) {
    }

    ngOnInit(): void {
        this.prodajalec = new Prodajalec();
        this.prodajalec.ime = '';
        this.prodajalec.priimek = '';
        this.prodajalec.email = '';
        this.prodajalec.geslo = '';
        this.prodajalec.aktiviran = 0;
    }

    nazaj(): void {
        this.location.back();
    }

    neki(): void {
        this.prodajalecService.create(this.prodajalec).then(resp => {
            this.router.navigate(['/admin/prodajalci']);
        })
    }

}

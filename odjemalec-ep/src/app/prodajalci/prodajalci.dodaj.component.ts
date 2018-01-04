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
        this.prodajalec.admin_idadmin = 1; // temporary
    }

    nazaj(): void {
        this.location.back();
    }

    neki(): void {
        console.log(this.prodajalec.geslo);
        console.log(this.prodajalec.ime);
        console.log(this.prodajalec.priimek);
        console.log(this.prodajalec.email);
        console.log(this.prodajalec.admin_idadmin);
        console.log("NEKIIII");
        this.prodajalecService.create(this.prodajalec);
        this.router.navigate(['/admin/prodajalci']);
    }

}

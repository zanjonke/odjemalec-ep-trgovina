import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Prodajalec} from "./models/prodajalec";
import {ProdajalecService} from "./services/prodajalec.service";


@Component({
    moduleId: module.id,
    selector: 'prodajalci-posodobi.component',
    templateUrl: 'prodajalci-posodobi.component.html'
})
export class ProdajalecPosodobiComponent implements OnInit {
    prodajalec: Prodajalec;
    missingPassword: boolean = false;
    stanje: string;
    checked: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private prodajalecService: ProdajalecService) {
    }

    ngOnInit(): void {
        this.prodajalec = JSON.parse(localStorage.getItem('prodajalec')) as Prodajalec;
        if(this.prodajalec.aktiviran == 0){
            this.stanje = 'Aktiviraj';
        } else {
            this.stanje = 'Deaktiviraj';
            this.checked= "checked";
        }
    }
    zamenjaj(): void {
        //TODO -> aktiviranje/deaktiviranje prodajalca
        if (this.stanje == 'Aktiviraj') {
            this.stanje = 'Deaktiviraj';
        } else {
            this.checked= "checked";
            this.stanje = 'Aktiviraj';
        }
    }

    nazaj(): void {
        this.location.back();
    }

    posodobi(): void {
        if (this.prodajalec.geslo == '' || this.prodajalec.geslo == null) {
            this.missingPassword = true
        } else {
            if (this.stanje == 'Aktiviraj') {
                this.prodajalec.aktiviran = 0
            } else if (this.stanje == 'Deaktiviraj') {
                this.prodajalec.aktiviran = 1
            }
            this.missingPassword = false
            this.prodajalecService.update(this.prodajalec);
            localStorage.setItem('prodajalec', JSON.stringify(this.prodajalec));
            this.router.navigate(['/admin/prodajalci/podrobnosti']);
        }
    }

    jeAdmin(): boolean {
        if (localStorage.getItem("jeAdmin") === "true") {
            return true;
        } else {
            return false;
        }
    }

}

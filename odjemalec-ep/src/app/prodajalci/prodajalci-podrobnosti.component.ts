import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Prodajalec} from "./models/prodajalec";
import {ProdajalecService} from "./services/prodajalec.service";

@Component({
    moduleId: module.id,
    selector: 'prodajalci-podrobnosti',
    templateUrl: 'prodajalci-podrobnosti.component.html'
})
export class ProdajalecPodrobnostiComponent implements OnInit {
    prodajalec: Prodajalec;
    stanje: string;

    constructor(private prodajalecService: ProdajalecService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.stanje = 'Aktiviraj';
        this.prodajalec = JSON.parse(localStorage.getItem('prodajalec')) as Prodajalec;
    }
    zamenjaj(): void {
        //TODO -> aktiviranje/deaktiviranje prodajalca
        if (this.stanje == 'Aktiviraj') {
            this.stanje = 'Deaktiviraj';
        } else {
            this.stanje = 'Aktiviraj';
        }
    }
    nazaj(): void {
        localStorage.removeItem('prodajalec');
        this.router.navigate(['/admin/prodajalci']);
    }
    posodobi(): void {
        this.router.navigate(['/admin/prodajalci/posodobi']);
    }

    zbrisi(): void {
        console.log("v zbrisi()");
        this.prodajalecService.delete(this.prodajalec.idprodajalec);
        localStorage.removeItem('prodajalec');
        this.router.navigate(['/admin/prodajalci']);

    }
}

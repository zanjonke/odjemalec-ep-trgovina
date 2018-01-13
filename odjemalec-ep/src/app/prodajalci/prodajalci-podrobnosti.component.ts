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
    constructor(private prodajalecService: ProdajalecService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.prodajalec = JSON.parse(localStorage.getItem('prodajalec')) as Prodajalec;
    }

    nazaj(): void {
        localStorage.removeItem('prodajalec');
        this.router.navigate(['/admin/prodajalci']);
    }
    posodobi(): void {
        this.router.navigate(['/admin/prodajalci/posodobi']);
    }

    zbrisi(): void {
        this.prodajalecService.delete(this.prodajalec.idprodajalec);
        localStorage.removeItem('prodajalec');
        this.router.navigate(['/admin/prodajalci']);

    }
}

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


    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private prodajalecService: ProdajalecService) {
    }

    ngOnInit(): void {
        this.prodajalec = JSON.parse(localStorage.getItem('prodajalec')) as Prodajalec;
    }

    nazaj(): void {
        this.location.back();
    }

    posodobi(): void {
        this.prodajalecService.update(this.prodajalec);
        localStorage.setItem('prodajalec', JSON.stringify(this.prodajalec));
        this.router.navigate(['/admin/prodajalci/podrobnosti']);
    }

}

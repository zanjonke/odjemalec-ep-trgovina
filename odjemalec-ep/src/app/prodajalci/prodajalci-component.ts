import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProdajalecService} from "./services/prodajalec.service";
import {Prodajalec} from "./models/prodajalec";

@Component({
    moduleId: module.id,
    selector: 'vsi-prodajalci',
    templateUrl: 'prodajalci-component.html'
})
export class ProdajalciComponent implements OnInit {
    prodajalci: Prodajalec[];


    constructor(private prodajalecService: ProdajalecService,
                private router: Router) {
    }

    getProdajalci(): void {
        this.prodajalecService
            .getProdajalci()
            .then(prodajalci => this.prodajalci = prodajalci);
    }

    ngOnInit(): void {
        this.getProdajalci();
    }
    dodaj(): void {
        this.router.navigate(['/admin/prodajalci/dodaj']);
    }
    naPodrobnosti(prodajalec: Prodajalec): void {
        localStorage.setItem('prodajalec', JSON.stringify(prodajalec));
        this.router.navigate(['/admin/prodajalci/podrobnosti']);
    }

}

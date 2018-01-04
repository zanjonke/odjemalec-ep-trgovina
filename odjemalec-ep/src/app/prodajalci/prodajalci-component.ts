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
    Nprodajalci: Prodajalec[] = [];
    Aprodajalci: Prodajalec[] = [];
    razvrsceno: boolean;

    constructor(private prodajalecService: ProdajalecService,
                private router: Router) {
    }

    getProdajalci(): void {
        this.prodajalecService
            .getProdajalci()
            .then(prodajalci => {this.prodajalci = prodajalci;
                if(this.razvrsceno){this.razvrsti()}
                });
    }

    ngOnInit(): void {
        if (localStorage.getItem('razvrsceno') === null) {
            this.razvrsceno = false;
            localStorage.setItem('razvrsceno', JSON.stringify(this.razvrsceno));
        } else {
            this.razvrsceno = JSON.parse(localStorage.getItem('razvrsceno')) as boolean;
        }
        this.getProdajalci()
    }

    razvrsti(): void {
        this.razvrsceno = true;
        localStorage.setItem('razvrsceno', JSON.stringify(this.razvrsceno));
        if (this.Nprodajalci.length == 0 && this.Aprodajalci.length == 0) {
            for (let prodajalec of this.prodajalci) {
                if (prodajalec.aktiviran === "0") {
                    this.Nprodajalci.push(prodajalec);
                } else {
                    this.Aprodajalci.push(prodajalec);
                }
            }
        }
    }
    vsiProdajalci(): void {
        this.razvrsceno= false;
        localStorage.setItem('razvrsceno', JSON.stringify(this.razvrsceno));
    }

    dodaj(): void {
        this.router.navigate(['/admin/prodajalci/dodaj']);
    }

    naPodrobnosti(prodajalec: Prodajalec): void {
        localStorage.setItem('prodajalec', JSON.stringify(prodajalec));
        this.router.navigate(['/admin/prodajalci/podrobnosti']);
    }

}

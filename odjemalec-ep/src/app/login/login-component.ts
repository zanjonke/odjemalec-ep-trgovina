import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';
import {ProdajalecService} from "../prodajalci/services/prodajalec.service";
import {Prodajalec} from "../prodajalci/models/prodajalec";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login-component.html'
})
export class LoginComponent implements OnInit{
    uporabnik: Uporabnik = new Uporabnik;

    stranke: Uporabnik[];
    prodajalci: Uporabnik[];
    admini: Uporabnik[];

    constructor(private uporabnikService: UporabnikService,
                private router: Router,
                private location: Location,
                private prodajalecService: ProdajalecService) {
    }

    ngOnInit(): void{
        this.getStranke()
        this.getProdajalci()
        this.getAdmin()
    }

    submitForm(): void {
        for (let uporabnik of this.stranke) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(uporabnik));
                localStorage.setItem('jeStranka', JSON.stringify(true));
                this.router.navigate(['/artikli']);
            }
        }
        for (let uporabnik of this.prodajalci) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(uporabnik));
                localStorage.setItem('jeProdajalec', JSON.stringify(true));
                let u = JSON.parse(localStorage.getItem('currentUser')) as Uporabnik;
                let p = new Prodajalec();
                this.prodajalecService.getProdajalec(u.idprodajalec).then(prodajalec => {
                    p = prodajalec;
                    if(p.aktiviran === "0"){
                        localStorage.setItem('pravice',JSON.stringify(false));
                    } else {
                        localStorage.setItem('pravice',JSON.stringify(true));
                    }
                    this.router.navigate(['/prodajalec/stranke']);
                }, reason => {console.log("Prišlo je do napake!")});
            }
        }
        for (let uporabnik of this.admini) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(uporabnik));
                localStorage.setItem('jeAdmin', JSON.stringify(true));
                this.router.navigate(['/artikli']);
            }
        }

    }

    getStranke(): void {
        this.uporabnikService
            .getStranke()
            .then(stranke => this.stranke = stranke);
    }

    getProdajalci(): void {
        this.uporabnikService
            .getProdajalci()
            .then(stranke => this.prodajalci = stranke);
    }

    getAdmin(): void {
        this.uporabnikService
            .getAdmin()
            .then(stranke => this.admini = stranke);
    }

    nazaj(): void {
        this.location.back();
    }

}

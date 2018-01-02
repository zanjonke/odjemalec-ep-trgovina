import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';

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
                private location: Location) {
    }

    ngOnInit(): void{
        this.getStranke()
        this.getProdajalci()
        this.getAdmin()
    }

    submitForm(): void {
        for (let uporabnik of this.stranke) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(this.uporabnik));
                localStorage.setItem('jeStranka', JSON.stringify(true));
                this.router.navigate(['/artikli']);
            }
        }
        for (let uporabnik of this.prodajalci) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(this.uporabnik));
                localStorage.setItem('jeProdajalec', JSON.stringify(true));
                this.router.navigate(['/prodajalec/stranke']);
            }
        }
        for (let uporabnik of this.admini) {
            if (this.uporabnik.email === uporabnik.email && this.uporabnik.geslo === uporabnik.geslo) {
                localStorage.setItem('currentUser', JSON.stringify(this.uporabnik));
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

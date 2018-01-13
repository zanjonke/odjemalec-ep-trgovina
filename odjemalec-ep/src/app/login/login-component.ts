import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Uporabnik} from './models/uporabnik';
import {LoginService} from './services/login.service';
import {ProdajalecService} from "../prodajalci/services/prodajalec.service";
import {Prodajalec} from "../prodajalci/models/prodajalec";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login-component.html'
})
export class LoginComponent implements OnInit{
    uporabnik: Uporabnik = new Uporabnik;

    constructor(private loginService: LoginService,
                private router: Router,
                private location: Location,
                private prodajalecService: ProdajalecService) {
    }

    ngOnInit(): void{
    }

    submitForm(): void {
        this.loginService
            .login(this.uporabnik.email, this.uporabnik.geslo)
            .then(uporabnik => {
                this.uporabnik = uporabnik
                localStorage.setItem('me', JSON.stringify(uporabnik));
                // stranka => 0, prodajalec => 1, admin => 2
                if (this.uporabnik.tip == 0) {
                    localStorage.setItem('jeStranka', JSON.stringify(true));
                    this.router.navigate(['/artikli']);
                } else if (this.uporabnik.tip == 1){
                    localStorage.setItem('jeProdajalec', JSON.stringify(true));
                    this.router.navigate(['/artikli']);
                } else if (this.uporabnik.tip == 2){
                    localStorage.setItem('jeAdmin', JSON.stringify(true));
                    this.router.navigate(['/admin/prodajalci']);
                }
            })
    }

    nazaj(): void {
        this.location.back();
    }

}

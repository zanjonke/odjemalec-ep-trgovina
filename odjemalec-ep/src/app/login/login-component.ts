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

    constructor(private uporabnikService: UporabnikService,
                private router: Router,
                private location: Location) {
    }

    ngOnInit(): void{
        this.router.navigate(['/login']);
    }

    submitForm(): void {
       //TODO
    }

    nazaj(): void {
        this.location.back();
    }

}

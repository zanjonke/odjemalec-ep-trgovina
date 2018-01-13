import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Stranka} from "../stranke/models/stranka";
import {StrankaService} from "../stranke/services/Stranka.service";

@Component({
    moduleId: module.id,
    selector: 'register-component',
    templateUrl: 'register-component.html'
})
export class RegisterComponent implements OnInit {
    stranka: Stranka;
    missingData: boolean = false
    recaptcha: boolean = false

    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private strankaService: StrankaService) {
    }

    public resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
        if (captchaResponse)  {
            this.recaptcha = true
        } 
    }

    ngOnInit(): void {
        this.stranka = new Stranka();
        this.stranka.ime = '';
        this.stranka.priimek = '';
        this.stranka.email = '';
        this.stranka.geslo = '';
        this.stranka.aktiviran = 0;
        this.stranka.naslov = '';
        this.stranka.telefon = '';
    }

    nazaj(): void {
        this.location.back();
    }

    potrdi(): void {
        if (this.pravilnoIzpolnjeno()) {
            this.strankaService.create(this.stranka).then(resp => {
                this.router.navigate(['/login']);
            });
        } else {
            this.missingData = true;
        }
    }

    pravilnoIzpolnjeno(): boolean {
        if (this.stranka.ime != '' &&
            this.stranka.priimek != '' &&
            this.stranka.email != '' &&
            this.stranka.geslo != '' &&
            this.stranka.naslov != '' &&
            this.stranka.telefon != '' &&
            this.recaptcha) {
            return true;
        } else {
            return false;
        }
    }

}

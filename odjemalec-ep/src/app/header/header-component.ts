import { Component,Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Uporabnik} from "../login/models/uporabnik";
import {ProdajalecService} from "../prodajalci/services/prodajalec.service";
import {Prodajalec} from "../prodajalci/models/prodajalec";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header-component.html'
})

export class HeaderComponent {
    p: Prodajalec;
    constructor(private router: Router,
                private prodajalecService: ProdajalecService) {
    }

    logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    goToHome(): void {
        if (localStorage.getItem("jeAdmin") === "true") {
            this.router.navigate(['/admin/prodajalci']);
        } else {
            this.router.navigate(['/artikli']);
        } 
    }
    goToProfile(): void {
        console.log("goToProfile()");
        this.router.navigate(['/profil']);
    }
    goToLogin(): void {
        this.router.navigate(['/login']);
    }
    goToRegister(): void {
        this.router.navigate(['/register']);
    }
    goToProdajalci(): void {
        this.router.navigate(['/admin/prodajalci']);
    }

    goToStranke(): void {
        this.router.navigate(['/prodajalec/stranke']);
    }

    goToKosarica(): void {
        this.router.navigate(['/stranka/kosarica']);
    }

    jeAdmin(): boolean {
        if (localStorage.getItem("jeAdmin") === "true") {
            return true;
        } else {
            return false;
        }
    }
    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }
    jeStranka(): boolean {
        if (localStorage.getItem("jeStranka") === "true") {
            return true;
        } else {
            return false;
        }
    }
}
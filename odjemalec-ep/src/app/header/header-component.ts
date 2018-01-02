import { Component,Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header-component.html'
})

export class HeaderComponent { 
    constructor(private router: Router) {
    }

    goToHome(): void {
        if (localStorage.getItem("jeAdmin") === "true") {
            this.router.navigate(['/admin/artikli']);
        } else if (localStorage.getItem("jeProdajalec") === "true") {
            this.router.navigate(['/prodajalec/artikli']);
        } else if (localStorage.getItem("jeStranka") === "true") {
            this.router.navigate(['/artikli']);
        }
    }

    goToLogin(): void {
        this.router.navigate(['/login']);
    }

    goToStranke(): void {
        this.router.navigate(['/prodajalec/stranke']);
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
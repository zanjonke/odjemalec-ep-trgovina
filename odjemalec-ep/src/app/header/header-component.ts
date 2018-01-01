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

    ngOnInit(): void{
        localStorage.setItem('jeStranka', JSON.stringify(false));
        localStorage.setItem('jeProdajalec', JSON.stringify(false));
        localStorage.setItem('jeAdmin', JSON.stringify(false));
    }

    goToHome(): void {
        this.router.navigate(['/artikli']);
    }

    goToLogin(): void {
        this.router.navigate(['/login']);
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
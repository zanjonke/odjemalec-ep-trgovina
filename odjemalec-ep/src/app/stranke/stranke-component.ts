import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Stranka} from './models/stranka';
import {StrankaService} from './services/Stranka.service';

@Component({
    moduleId: module.id,
    selector: 'vse-stranke',
    templateUrl: 'stranke-component.html'
})
export class StrankeComponent implements OnInit {
    stranke: Stranka[];
    Nstranke: Stranka[] = [];
    Astranke: Stranka[] = [];
    razvrsceno: boolean;
    pravice: boolean;
    constructor(private strankeService: StrankaService,
                private router: Router) {
    }

    getStranke(): void {
        this.strankeService
            .getStranke()
            .then(stranke => {
                this.stranke = stranke;
                if (this.razvrsceno) {
                    this.razvrsti();
                }
            });
    }

    ngOnInit(): void {
        if(localStorage.getItem('razvrsceno') === null){
            this.razvrsceno = false;
            localStorage.setItem('razvrsceno',JSON.stringify(this.razvrsceno));
        } else {
            this.razvrsceno = JSON.parse(localStorage.getItem('razvrsceno')) as boolean;
        }
        this.pravice = JSON.parse(localStorage.getItem('pravice')) as boolean;
        if(this.pravice){
            console.log("PRAVICE SO ODOBRENE");
        } else {
            console.log("NIMATE PRAVIC");
        }
        this.getStranke();
    }

    naPodrobnosti(stranka: Stranka): void {
        localStorage.setItem('stranka', JSON.stringify(stranka));
        this.router.navigate(['/prodajalec/stranke/podrobnosti']);
    }

    razvrsti(): void {
        this.razvrsceno = true;
        localStorage.setItem('razvrsceno',JSON.stringify(this.razvrsceno));
        if(this.Nstranke.length == 0 && this.Astranke.length == 0){
            for(let stranka of this.stranke){
                if(stranka.aktiviran === "0" || stranka.aktiviran === null){
                    this.Nstranke.push(stranka);
                } else {
                    this.Astranke.push(stranka);
                }
            }
        }

    }
    vseStranke(): void{
        this.razvrsceno= false;
        localStorage.setItem('razvrsceno', JSON.stringify(this.razvrsceno));
    }
    dodaj(): void {
        this.router.navigate(['/prodajalec/stranke/dodaj']);
    }
}

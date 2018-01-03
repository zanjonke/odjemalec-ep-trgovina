import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Uporabnik} from "../login/models/uporabnik";



@Component({
    moduleId: module.id,
    selector: 'profil-component',
    templateUrl: 'profil-component.html'
})
export class ProfilComponent implements OnInit {
    uporabnik: Uporabnik;
    vloga: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        if(this.jeAdmin()){
            this.vloga = 'Admin';
        } else if (this.jeProdajalec()){
            this.vloga = 'Prodajalec';
        } else {
            this.vloga = 'Stranka';
        }
        this.uporabnik = JSON.parse(localStorage.getItem('currentUser')) as Uporabnik;
    }

    nazaj(): void {
        if(this.uporabnik.idstranka != null){
            //this.router.navigate(['/stranke/artikli']);
            this.location.back();
        } else if (this.uporabnik.idprodajalec != null){
            //this.router.navigate(['/prodajalci/artikli']);
            this.location.back();
        } else if (this.uporabnik.idadmin){
            //this.router.navigate(['/admini/prodajalci']);
            this.location.back();
        }

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
    posodobi(): void {
        this.router.navigate(['/profil/posodobi']);
    }
}

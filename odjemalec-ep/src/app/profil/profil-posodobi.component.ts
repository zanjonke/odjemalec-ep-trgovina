import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Uporabnik} from "../login/models/uporabnik";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Stranka} from "../stranke/models/stranka";

import {Admin} from "./models/admin";
import {Prodajalec} from "../prodajalci/models/prodajalec";




@Component({
    moduleId: module.id,
    selector: 'profil-posodobi.component',
    templateUrl: 'profil-posodobi.component.html'
})
export class ProfilPosodobiComponent implements OnInit {
    uporabnik: Uporabnik;
    vloga: string;
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private route: ActivatedRoute,
                private location: Location,
                private http: HttpClient,
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
        this.location.back();
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
        localStorage.setItem('currentUser', JSON.stringify(this.uporabnik));
        if (this.uporabnik.idprodajalec != null){
            this.updateProdajalec();
        } else if(this.uporabnik.idadmin != null){
            this.updateAdmin();
        } else if (this.uporabnik.idstranka != null){
            this.updateStranka();
        }
        this.router.navigate(['/profil']);
    }

    updateStranka(): Promise<void> {
        const url = `http://localhost:8080/netbeans/trgovina/api/stranke/` + this.uporabnik.idstranka;
        let s = new Stranka();
        s.ime = this.uporabnik.ime;
        s.priimek = this.uporabnik.priimek;
        s.geslo = this.uporabnik.geslo;
        s.naslov = this.uporabnik.naslov;
        s.telefon = this.uporabnik.telefon;
        s.email = this.uporabnik.email;
        return this.http
            .put(url, JSON.stringify(s), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);

    }

    updateProdajalec(): Promise<void> {
        const url = `http://localhost:8080/netbeans/trgovina/api/prodajalci/` + this.uporabnik.idprodajalec;
        let p = new Prodajalec();
        p.ime = this.uporabnik.ime;
        p.priimek = this.uporabnik.priimek;
        p.geslo = this.uporabnik.geslo;
        p.email = this.uporabnik.email;
        p.admin_idadmin = 1; // temporary
        return this.http
            .put(url, JSON.stringify(p), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);

    }
    updateAdmin(): Promise<void> {
        const url = `http://localhost:8080/netbeans/trgovina/api/admini/` + this.uporabnik.idadmin;
        let a = new Admin();
        a.ime = this.uporabnik.ime;
        a.priimek = this.uporabnik.priimek;
        a.geslo = this.uporabnik.geslo;
        a.email = this.uporabnik.email;
        return this.http
            .put(url, JSON.stringify(a), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

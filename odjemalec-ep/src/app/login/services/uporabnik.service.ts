import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Uporabnik} from '../models/uporabnik';

@Injectable()
export class UporabnikService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    getStranke(): Promise<Uporabnik[]> {
        return this.http.get('http://localhost:8080/netbeans/trgovina/api/stranke')
            .toPromise()
            .then(response => response as Uporabnik[])
            .catch(this.handleError);
    }

    getProdajalci(): Promise<Uporabnik[]> {
        return this.http.get('http://localhost:8080/netbeans/trgovina/api/prodajalci')
            .toPromise()
            .then(response => response as Uporabnik[])
            .catch(this.handleError);
    }

    getAdmin(): Promise<Uporabnik[]> {
        return this.http.get('http://localhost:8080/netbeans/trgovina/api/admini')
            .toPromise()
            .then(response => response as Uporabnik[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }

}


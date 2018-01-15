import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Narocilo} from '../models/narocilo';

@Injectable()
export class NarociloService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/narocila';

    constructor(private http: HttpClient) {
    }

    getAll(): Promise <Narocilo[]> {
        const url = `${this.url}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Narocilo[])
            .catch(this.handleError);
    }

    getNarocila(id: number): Promise<Narocilo[]> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Narocilo[])
            .catch(this.handleError);
    }

    insert(nar: Narocilo): Promise<void> {
        const url = `${this.url}`;
        return this.http
            .post(url, JSON.stringify(nar), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    update(nar: Narocilo): Promise<void> {
        const url = `${this.url}/${nar.idnarocilo}`;
        console.log(url)
        return this.http
            .put(url, JSON.stringify(nar), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}
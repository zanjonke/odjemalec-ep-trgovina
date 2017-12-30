import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Stranka} from '../models/stranka';

@Injectable()
export class StrankaService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/netbeans/trgovina/api/stranke';

    constructor(private http: HttpClient) {
    }

    getStranke(): Promise<Stranka[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response as Stranka[])
            .catch(this.handleError);
    }

    getStranka(id: number): Promise<Stranka> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Stranka)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null, () => null)
            .catch(this.handleError);
    }

    create(stranka: Stranka): Promise<void> {
        return this.http
            .post(this.url, JSON.stringify(stranka), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}


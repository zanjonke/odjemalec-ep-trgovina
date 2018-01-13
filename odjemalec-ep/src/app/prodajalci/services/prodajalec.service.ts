import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {Prodajalec} from "../models/prodajalec";


@Injectable()
export class ProdajalecService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/prodajalci';

    constructor(private http: HttpClient) {
    }

    getProdajalci(): Promise<Prodajalec[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response as Prodajalec[])
            .catch(this.handleError);
    }

    getProdajalec(id: number): Promise<Prodajalec> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Prodajalec)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        console.log(this.headers);
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null, () => null)
            .catch(this.handleError);
    }

    create(prodajalec: Prodajalec): Promise<void> {
        return this.http
            .post(this.url, JSON.stringify(prodajalec), {headers: this.headers, responseType: 'text'})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    update(prodajalec: Prodajalec): Promise<void> {
        console.log(prodajalec.geslo)
        const url = this.url + '/' + prodajalec.idprodajalec;
        return this.http
            .put(url, JSON.stringify(prodajalec), {headers: this.headers, responseType: 'text'})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}


import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Artikel} from '../models/artikel';

@Injectable()
export class ArtikelService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/artikli';

    constructor(private http: HttpClient) {
    }

    getArtikliAktivirani(): Promise<Artikel[]> {
        const url = `${this.url}/aktivirani`
        return this.http.get(url)
            .toPromise()
            .then(response => response as Artikel[])
            .catch(this.handleError);
    }

    getArtikli(): Promise<Artikel[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response as Artikel[])
            .catch(this.handleError);
    }

    getArtikel(id: number): Promise<Artikel> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Artikel)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null, () => null)
            .catch(this.handleError);
    }

    create(artikel: Artikel): Promise<void> {
        return this.http
            .post(this.url, JSON.stringify(artikel), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    update(artikel: Artikel): Promise<void> {
        var putdata = {
            naziv: artikel.naziv,
            opis: artikel.opis,
            cena: artikel.cena,
            aktiviran: artikel.aktiviran
        }
        const url = this.url + '/' + artikel.idartikel;
        return this.http
            .put(url, JSON.stringify(putdata), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}


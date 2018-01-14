import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Ocene} from '../models/ocena';

@Injectable()
export class OceneService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/ocene';

    constructor(private http: HttpClient) {
    }
    
    getOcene(id: number): Promise<Ocene[]> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Ocene[])
            .catch(this.handleError);
    }

    getAll(): Promise<Ocene[]> {
        const url = `${this.url}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Ocene[])
            .catch(this.handleError);
    }

    update(idart: number, idstran:number, oce: number): Promise<void> {
        let putdata = {
            idstranka: idstran,
            ocena: oce
        }
        const url = `${this.url}/${idart}`;
        return this.http
            .put(url, JSON.stringify(putdata), {headers: this.headers})
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }

    create(idart: number, idstran:number, oce: number): Promise<void> {
        let postdata = {
            idartikel: idart,
            idstranka: idstran,
            ocena: oce
        }
        const url = `${this.url}`;
        return this.http
            .post(url, JSON.stringify(postdata), {headers: this.headers})
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}
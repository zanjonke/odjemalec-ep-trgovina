import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Kosarica} from '../models/kosarica';

@Injectable()
export class KosaricaService {
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/kosarice';

    constructor(private http: HttpClient) {
    }
    
    getKosarica(id: number): Promise<Kosarica[]> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as Kosarica[])
            .catch(this.handleError);
    }

    update(idart: number, idstran:number, kol: number): Promise<void> {
        let putdata = {
            idartikel: idart,
            kolicina: kol
        }
        const url = `${this.url}/${idstran}`;
        return this.http
            .put(url, JSON.stringify(putdata), {headers: this.headers})
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }

    create(idart: number, idstran:number, kol: number): Promise<void> {
        let postdata = {
            idartikel: idart,
            idstranka: idstran,
            kolicina: kol
        }
        const url = `${this.url}`;
        return this.http
            .post(url, JSON.stringify(postdata), {headers: this.headers})
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }
    
    delete(idstran:number): Promise<void> {
        const url = `${this.url}/${idstran}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(response => console.log(response))
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}
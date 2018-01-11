import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Uporabnik} from '../models/uporabnik';

@Injectable()
export class LoginService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'https://localhost/netbeans/trgovina/api/login';

    constructor(private http: HttpClient) {
    }

    login(email: String, geslo: String): Promise<Uporabnik> {
        var postdata = {
            "email": email,
            "geslo": geslo
        }
        console.log(postdata)
        return this.http
            .post(this.url, JSON.stringify(postdata), {headers: this.headers})
            .toPromise()
            .then(response => response as Uporabnik)
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }

}


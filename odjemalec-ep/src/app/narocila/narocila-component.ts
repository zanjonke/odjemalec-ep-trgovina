import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import {Narocilo} from './models/narocilo';
import {NarociloService} from './services/narocilo.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
    moduleId: module.id,
    selector: 'narocila',
    templateUrl: 'narocila-component.html'
})

export class NarocilaComponent implements OnInit {
    idStr: number;
    narocila: Narocilo[];
    dataSource = new MatTableDataSource;
    displayedColumns = ['id','naslov', 'cena', 'status'];
    

    constructor(private narociloService: NarociloService,
        private router: Router) {
    }

    ngOnInit() {
        let str = JSON.parse(localStorage.getItem('me'));
        this.idStr = str.idstranka
        this.narociloService.getNarocila(this.idStr)
            .then(data => {
                this.narocila = data
                this.dataSource= new MatTableDataSource<Narocilo>(this.narocila);
            })
    }

    getNaslov() {
        let str = JSON.parse(localStorage.getItem('me'));
        return str.naslov
    }

    jeStranka(): boolean {
        if (localStorage.getItem("jeStranka") === "true") {
            return true;
        } else {
            return false;
        }
    }
}

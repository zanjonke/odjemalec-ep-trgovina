import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import {Narocilo} from './models/narocilo';
import {NarociloService} from './services/narocilo.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
    moduleId: module.id,
    selector: 'narocila-prodajalec',
    templateUrl: 'narocila-prodajalec.component.html'
})

export class NarocilaProdajalecComponent implements OnInit {
    idStr: number;
    narocila1: Narocilo[] = [];
    narocila2: Narocilo[] = [];
    dataSource = new MatTableDataSource;
    dataSource2 = new MatTableDataSource;
    displayedColumns = ['id', 'cena', 'status', 'akcija', 'akcija2'];
    displayedColumns2 = ['id', 'cena', 'status', 'akcija'];
    narocilo: Narocilo;
    

    constructor(private narociloService: NarociloService,
        private router: Router) {
    }

    ngOnInit() {
        this.getNarocila()
    }

    getNarocila(): void {
        let str = JSON.parse(localStorage.getItem('me'));
        this.idStr = str.idstranka
        this.narociloService.getAll()
            .then(data => {
                data.forEach( (element) => {
                    if (element.potrjeno == 1 || element.preklicano == 1) {
                        this.narocila2.push(element)
                    } else {
                        this.narocila1.push(element)
                    }
                })
                this.dataSource = new MatTableDataSource<Narocilo>(this.narocila2);
                this.dataSource2 = new MatTableDataSource<Narocilo>(this.narocila1);
                
            })
    }

    spremeni(pot: number, pre: number, nar: Narocilo): void {
        this.narocilo = new Narocilo;
        this.narocilo.idnarocilo = nar.idnarocilo
        this.narocilo.cena = nar.cena
        this.narocilo.stranka_idstranka = nar.stranka_idstranka
        this.narocilo.potrjeno = pot
        this.narocilo.preklicano = pre
        console.log(this.narocilo)
        this.narociloService.update(this.narocilo)
        this.narocila1 = []
        this.narocila2 = []
        this.getNarocila()

    }

    jeProdajalec(): boolean {
        if (localStorage.getItem("jeProdajalec") === "true") {
            return true;
        } else {
            return false;
        }
    }
}

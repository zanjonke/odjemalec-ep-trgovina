import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prpo-app',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    naslov = 'TRGOVINA EP';
}

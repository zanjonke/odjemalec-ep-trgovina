import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaService} from "./stranke/services/Stranka.service";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";
import {ArtikelService} from "./artikli/services/artikel.service";
import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {LoginComponent} from "./login/login-component";
import {UporabnikService} from "./login/services/uporabnik.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        StrankeComponent,
        StrankaPodrobnostiComponent,
        ArtikliComponent,
        ArtikliPodrobnostiComponent,
        LoginComponent,
    ],
    providers: [StrankaService, ArtikelService, UporabnikService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


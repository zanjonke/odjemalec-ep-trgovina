import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import { MaterialModule } from './material.module';
import {MatInputModule} from '@angular/material/input';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header-component';
import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaService} from "./stranke/services/Stranka.service";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";
import {ArtikelService} from "./artikli/services/artikel.service";
import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {LoginComponent} from "./login/login-component";
import {UporabnikService} from "./login/services/uporabnik.service";
import {ProfilComponent} from "./profil/profil-component";
import {ProfilPosodobiComponent} from "./profil/profil-posodobi.component";
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        AppComponent,
        StrankeComponent,
        StrankaPodrobnostiComponent,
        ArtikliComponent,
        ArtikliPodrobnostiComponent,
        LoginComponent,
        HeaderComponent,
        ProfilComponent, ProfilPosodobiComponent
    ],
    providers: [StrankaService, ArtikelService, UporabnikService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


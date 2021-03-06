import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import { MaterialModule } from './material.module';
import {MatInputModule} from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header-component';

import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaService} from "./stranke/services/Stranka.service";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";

import {OceneService} from "./artikli/services/ocene.service";
import {KosaricaService} from "./artikli/services/kosarica.service";
import {KosaricaComponent} from "./artikli/kosarica-component";
import {ArtikelService} from "./artikli/services/artikel.service";
import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {ArtikliPosodobiComponent} from "./artikli/artikli-posodobi.component";
import {ArtikliDodajComponent} from "./artikli/artikli-dodaj.component";

import {LoginComponent} from "./login/login-component";
import {LoginService} from "./login/services/login.service";

import {ProfilComponent} from "./profil/profil-component";
import {ProfilPosodobiComponent} from "./profil/profil-posodobi.component";
import {MatProgressSpinnerModule} from "@angular/material";

import {ProdajalciComponent} from "./prodajalci/prodajalci-component";
import {ProdajalecService} from "./prodajalci/services/prodajalec.service";
import {ProdajalecPodrobnostiComponent} from "./prodajalci/prodajalci-podrobnosti.component";
import {ProdajalecPosodobiComponent} from "./prodajalci/prodajalci-posodobi.component";
import {ProdajalecDodajComponent} from "./prodajalci/prodajalci-dodaj.component";

import {StrankaPosodobiComponent} from "./stranke/stranka-posodobi.component";
import {StrankaDodajComponent} from "./stranke/stranke-dodaj.component";
import {RegisterComponent} from "./register/register-component";

import {NarocilaComponent} from "./narocila/narocila-component";
import {NarociloService} from "./narocila/services/narocilo.service"; 
import {NarocilaProdajalecComponent} from "./narocila/narocila-prodajalec.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatInputModule,
        MatProgressSpinnerModule,
        RecaptchaModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        StrankeComponent, StrankaPodrobnostiComponent,StrankaPosodobiComponent,StrankaDodajComponent,
        ArtikliComponent,
        ArtikliPodrobnostiComponent, ArtikliPosodobiComponent, ArtikliDodajComponent,
        KosaricaComponent,
        LoginComponent,
        HeaderComponent,
        ProfilComponent, ProfilPosodobiComponent,
        ProdajalciComponent, ProdajalecPodrobnostiComponent, ProdajalecPosodobiComponent, ProdajalecDodajComponent,
        RegisterComponent,
        NarocilaComponent, NarocilaProdajalecComponent
    ],
    providers: [StrankaService, ArtikelService, LoginService, ProdajalecService, OceneService, KosaricaService, NarociloService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


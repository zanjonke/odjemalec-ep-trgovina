import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {ArtikliPosodobiComponent} from "./artikli/artikli-posodobi.component";
import {ArtikliDodajComponent} from "./artikli/artikli-dodaj.component";
import {LoginComponent} from "./login/login-component";
import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";
import {ProfilComponent} from "./profil/profil-component";
import {ProfilPosodobiComponent} from "./profil/profil-posodobi.component";
import {ProdajalciComponent} from "./prodajalci/prodajalci-component";
import {ProdajalecPodrobnostiComponent} from "./prodajalci/prodajalci-podrobnosti.component";
import {ProdajalecPosodobiComponent} from "./prodajalci/prodajalci-posodobi.component";
import {ProdajalecDodajComponent} from "./prodajalci/prodajalci-dodaj.component";
import {StrankaPosodobiComponent} from "./stranke/stranka-posodobi.component";
import {StrankaDodajComponent} from "./stranke/stranke-dodaj.component";
import {RegisterComponent} from "./register/register-component";
import {KosaricaComponent} from "./artikli/kosarica-component";

const routes: Routes = [
    {path: '', redirectTo: '/artikli', pathMatch: 'full'},
    {path: 'artikli', component: ArtikliComponent},
    {path: 'artikli/:id', component: ArtikliPodrobnostiComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // stranka specific views
    {path: 'stranka/kosarica', component: KosaricaComponent},
    // prodajalec specific views
    {path: 'prodajalec/stranke', component: StrankeComponent},
    {path: 'prodajalec/stranke/podrobnosti', component: StrankaPodrobnostiComponent},
    {path: 'prodajalec/stranke/posodobi', component: StrankaPosodobiComponent},
    {path: 'prodajalec/stranke/dodaj', component: StrankaDodajComponent},
    {path: 'prodajalec/artikli/:id/posodobi', component: ArtikliPosodobiComponent},
    {path: 'prodajalec/artikli/dodaj', component: ArtikliDodajComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'profil/posodobi', component: ProfilPosodobiComponent},
    //admin specific views
    {path: 'admin/prodajalci', component: ProdajalciComponent},
    {path: 'admin/prodajalci/podrobnosti', component: ProdajalecPodrobnostiComponent},
    {path: 'admin/prodajalci/posodobi', component: ProdajalecPosodobiComponent},
    {path: 'admin/prodajalci/dodaj', component: ProdajalecDodajComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

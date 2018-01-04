import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {LoginComponent} from "./login/login-component";
import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";
import {ProfilComponent} from "./profil/profil-component";
import {ProfilPosodobiComponent} from "./profil/profil-posodobi.component";
import {ProdajalciComponent} from "./prodajalci/prodajalci-component";
import {ProdajalecPodrobnostiComponent} from "./prodajalci/prodajalci-podrobnosti.component";
import {ProdajalecPosodobiComponent} from "./prodajalci/prodajalci-posodobi.component";
import {ProdajalecDodajComponent} from "./prodajalci/prodajalci.dodaj.component";

const routes: Routes = [
    {path: '', redirectTo: '/artikli', pathMatch: 'full'},
    {path: 'artikli', component: ArtikliComponent},
    {path: 'artikli/:id', component: ArtikliPodrobnostiComponent},
    {path: 'login', component: LoginComponent},
    // prodajalec view
    {path: 'prodajalec/artikli', component: ArtikliComponent},
    {path: 'prodajalec/artikli/:id', component: ArtikliPodrobnostiComponent},
    {path: 'prodajalec/stranke', component: StrankeComponent},
    {path: 'prodajalec/stranke/:id', component: StrankaPodrobnostiComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'profil/posodobi', component: ProfilPosodobiComponent},
    //admin view
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

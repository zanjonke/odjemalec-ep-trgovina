import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {LoginComponent} from "./login/login-component";
import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";

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
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

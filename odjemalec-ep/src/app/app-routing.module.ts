import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";
import {ArtikliComponent} from "./artikli/artikli-component";
import {ArtikliPodrobnostiComponent} from "./artikli/artikli-podrobnosti.component";
import {LoginComponent} from "./login/login-component";

const routes: Routes = [
    {path: '', redirectTo: '/artikli', pathMatch: 'full'},
    {path: 'stranke', component: StrankeComponent},
    {path: 'stranke/:id', component: StrankaPodrobnostiComponent},
    {path: 'artikli', component: ArtikliComponent},
    {path: 'artikli/:id', component: ArtikliPodrobnostiComponent},
    {path: 'login', component: LoginComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

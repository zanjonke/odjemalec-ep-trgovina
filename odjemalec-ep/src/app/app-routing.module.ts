import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {StrankeComponent} from "./stranke/stranke-component";
import {StrankaPodrobnostiComponent} from "./stranke/stranka-podrobnosti.component";

const routes: Routes = [
    {path: '', redirectTo: '/stranke', pathMatch: 'full'},
    {path: 'stranke', component: StrankeComponent},
    {path: 'stranke/:id', component: StrankaPodrobnostiComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

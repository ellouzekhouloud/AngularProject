import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddfournisseurComponent } from './components/addfournisseur/addfournisseur.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ViewProduitsFournisseurComponent } from './components/view-produits-fournisseur/view-produits-fournisseur.component';
import { PersonnelsComponent } from './components/personnels/personnels.component';
import { AddPersonnelComponent } from './components/add-personnel/add-personnel.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ajouterfournisseurs', component: AddfournisseurComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'ajouterproduit', component: AddProduitComponent },
  { path: 'fournisseurs/:id/produits', component: ViewProduitsFournisseurComponent },
  { path: 'personnels', component: PersonnelsComponent },
  { path: 'ajouterpersonnel', component: AddPersonnelComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

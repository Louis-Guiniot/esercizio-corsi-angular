import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/studente', pathMatch: 'full' },
  { path: 'studente', loadChildren: () => import('./features/studente/studente.module').then(m => m.StudenteModule)},
  { path: 'corso', loadChildren: () => import('./features/corso/corso.module').then(m => m.CorsoModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

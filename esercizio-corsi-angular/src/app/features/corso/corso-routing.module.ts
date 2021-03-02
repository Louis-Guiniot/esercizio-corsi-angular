import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './main/corso.component';

const routes: Routes = [{ path: '', component: CorsoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CorsoRoutingModule { }

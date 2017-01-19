import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomainComponent } from './domain.component';

const routes: Routes = [
  { path: 'domain', component: DomainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainRoutingModule { }

export const routedComponents = [DomainComponent];
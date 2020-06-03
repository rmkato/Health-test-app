import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthTestPage } from './health-test.page';

const routes: Routes = [
  {
    path: '',
    component: HealthTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthTestPageRoutingModule {}

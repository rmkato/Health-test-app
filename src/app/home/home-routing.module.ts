import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HealthTestPage } from '../health-test/health-test.page'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '/health-test',
    component: HealthTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

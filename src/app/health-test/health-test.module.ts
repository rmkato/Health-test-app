import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthTestPageRoutingModule } from './health-test-routing.module';

import { HealthTestPage } from './health-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthTestPageRoutingModule
  ],
  declarations: [HealthTestPage]
})
export class HealthTestPageModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventoryMenuComponent } from './inventory-menu/inventory-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OutputZoneComponent } from './output-zone/output-zone.component';

const routes: Routes = [
  { path: 'inventory-menu', component: InventoryMenuComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'output-zone', component: OutputZoneComponent },
  { path: 'app', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

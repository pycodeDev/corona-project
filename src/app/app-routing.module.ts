import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataronaComponent } from './datarona/datarona.component';
import { KontakComponent } from './kontak/kontak.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SourceDataComponent } from './source-data/source-data.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'data', component: DataronaComponent },
  { path: 'kontak', component: KontakComponent },
  { path: 'source', component: SourceDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

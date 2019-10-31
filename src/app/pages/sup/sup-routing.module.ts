import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupComponent } from './sup.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'home',
    component: SupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupRoutingModule {}

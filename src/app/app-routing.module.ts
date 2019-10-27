import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

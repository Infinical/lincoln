import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'amb', pathMatch: 'full' },
  // {
  //   path: 'app',
  //   loadChildren: () =>
  //     import('./pages/admin/auth/auth.module').then(mod => mod.AuthModule)
  // },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'sup',
    loadChildren: () =>
      import('./pages/sup/sup.module').then(mod => mod.SupModule)
  },
  {
    path: 'amb',
    loadChildren: () =>
      import('./pages/ambassador/ambassador.module').then(
        mod => mod.AmbassadorModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbassadorComponent } from './ambassador.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { InviteSupervisorComponent } from './invite-supervisor/invite-supervisor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'home',
    component: AmbassadorComponent,
    children: [
      { path: 'new', component: CreateProjectComponent },
      { path: 'view', component: ViewProjectsComponent },
      { path: 'invite', component: InviteSupervisorComponent },
      { path: 'profile', component: MyProfileComponent },
      { path: 'details', component: ViewDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbassadorRoutingModule {}

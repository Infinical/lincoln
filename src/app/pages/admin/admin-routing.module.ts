import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'pdetails', component: ProjectDetailsComponent },
      { path: 'recs', component: RecommendationsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'udetails', component: UserDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

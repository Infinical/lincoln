import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbassadorComponent } from './ambassador.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';

const routes: Routes = [
  {
    path: '',
    component: AmbassadorComponent,
    children: [
      { path: 'new', component: CreateProjectComponent },
      { path: 'view', component: ViewProjectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbassadorRoutingModule {}

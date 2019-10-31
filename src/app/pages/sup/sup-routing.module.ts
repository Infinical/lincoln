import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupComponent } from './sup.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { CreateRecComponent } from './create-rec/create-rec.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SupComponent,
    children: [
      { path: 'recommendations', component: MyRecommendationsComponent },
      { path: 'create', component: CreateRecComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupRoutingModule {}

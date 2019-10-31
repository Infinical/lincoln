import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { SupRoutingModule } from './sup-routing.module';
import { SupComponent } from './sup.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { PendingComponent } from './my-recommendations/pending/pending.component';
import { CompletedComponent } from './my-recommendations/completed/completed.component';
import { CreateRecComponent } from './create-rec/create-rec.component';
import { RatingModule } from 'ng-starrating';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    SupComponent,
    MyRecommendationsComponent,
    PendingComponent,
    CompletedComponent,
    CreateRecComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SupRoutingModule,
    ClarityModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#052A47',
      secondaryColour: '#052A47',
      tertiaryColour: '#052A47'
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true,
      preventDuplicates: false
    }),

    RatingModule
  ]
})
export class SupModule {}

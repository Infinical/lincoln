import { NgModule } from '@angular/core';
import { AmbassadorComponent } from './ambassador.component';
import { AmbassadorRoutingModule } from './ambassador-routing.module';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { CreateProjectComponent } from './create-project/create-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { InviteSupervisorComponent } from './invite-supervisor/invite-supervisor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AmbassadorComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    InviteSupervisorComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AmbassadorRoutingModule,
    ClarityModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#167DC0',
      secondaryColour: '#167DC0',
      tertiaryColour: '#167DC0'
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      closeButton: true,
      preventDuplicates: false
    }),

    FlexLayoutModule
  ]
})
export class AmbassadorModule {}

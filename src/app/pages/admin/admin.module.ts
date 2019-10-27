import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AdminComponent, ProjectsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    })
  ]
})
export class AdminModule {}

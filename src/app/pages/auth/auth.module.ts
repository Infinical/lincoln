import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule {}

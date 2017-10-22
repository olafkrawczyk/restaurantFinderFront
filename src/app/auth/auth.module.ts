import { SinginComponent } from './singin/singin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { FormsModule } from '@angular/forms';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule,
    CommonModule
  ],
  declarations: [SingupComponent, ConfirmationComponent, SinginComponent, OwnerSignupComponent, OwnerSigninComponent]
})
export class AuthModule { }

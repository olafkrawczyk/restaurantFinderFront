import { SinginComponent } from './singin/singin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [SingupComponent, ConfirmationComponent, SinginComponent],
  providers: [AuthService]
})
export class AuthModule { }

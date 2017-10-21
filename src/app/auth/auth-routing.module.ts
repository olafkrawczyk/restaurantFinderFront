import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const authRoutes: Routes = [
    {path: 'signup', component: SingupComponent},
    {path: 'signin', component: SinginComponent},
    {path: 'owner_signup', component: OwnerSignupComponent},
    {path: 'owner_signin', component: OwnerSigninComponent},
    {path: 'confirmation', component: ConfirmationComponent}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}

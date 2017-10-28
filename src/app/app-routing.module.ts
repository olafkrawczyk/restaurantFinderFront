import { DashboardComponent } from './owner/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './auth/singup/singup.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const authRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class OwnerRoutingModule {

}

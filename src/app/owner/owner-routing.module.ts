import { OwnerGuard } from './../auth/guards/owner-guard.service';
import { EditRestaurantComponent } from './dashboard/edit-restaurant/edit-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const authRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent, canActivate: [OwnerGuard], children:
        [{path: 'edit', component: EditRestaurantComponent}]}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
    providers: [OwnerGuard]
})
export class OwnerRoutingModule {

}

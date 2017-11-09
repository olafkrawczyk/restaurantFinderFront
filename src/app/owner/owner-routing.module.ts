import { RestaurantDetailsComponent } from './dashboard/restaurant-details/restaurant-details.component';
import { OwnerGuard } from './../auth/guards/owner-guard.service';
import { EditRestaurantComponent } from './dashboard/edit-restaurant/edit-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const authRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent, canActivate: [OwnerGuard], children:
        [{path: 'edit/:id', component: EditRestaurantComponent},
         {path: 'edit', component: EditRestaurantComponent},
         {path: 'details/:id', component: RestaurantDetailsComponent}]}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule],
    providers: [OwnerGuard]
})
export class OwnerRoutingModule {

}

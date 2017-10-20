import { EditRestaurantComponent } from './dashboard/edit-restaurant/edit-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

const authRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent, children:
        [{path: 'edit', component: EditRestaurantComponent}]}
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class OwnerRoutingModule {

}

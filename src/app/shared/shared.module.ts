import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [RestaurantMenuComponent],
    exports: [RestaurantMenuComponent]
})
export class SharedModule {

}

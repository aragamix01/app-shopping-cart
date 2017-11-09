import { GoodsComponent } from './goods/goods.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './goods/cart/cart.component';

const appRoutes: Routes = [
    {path : '', redirectTo: 'shopping', pathMatch: 'full'},
    {path: 'shopping', component: GoodsComponent},
    {path: 'cart', component: CartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

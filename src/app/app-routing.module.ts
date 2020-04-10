import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductMainComponent } from './productos/product-main/product-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './productos/product-main/product-list/product/product.component';
import { ProductListComponent } from './productos/product-main/product-list/product-list.component';
import { ProductEditComponent } from './productos/product-main/product-edit/product-edit.component';
import { ProductDetailComponent } from './productos/product-main/product-detail/product-detail.component';


const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductMainComponent,
  children: [{path: ':id', component: ProductDetailComponent},
  {path: ':id/edit', component: ProductEditComponent},
  {path: 'new', component: ProductEditComponent}]},
  {path: 'monitoreo', component: ProductMainComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

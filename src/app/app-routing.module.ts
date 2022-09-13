import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsCategoriesComponent } from './pages/shop/components/categories/categories.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CollectionsMainComponent } from './pages/shop/components/main/collections-main.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/shop/components/product-page/product-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'collections',
    component: ShopComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CollectionsMainComponent,
      },
      {
        path: ':category',
        component: CollectionsCategoriesComponent,
      },
      {
        path: ':category/:id',
        component: ProductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

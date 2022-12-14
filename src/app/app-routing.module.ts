import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsCategoriesComponent } from './shop/components/categories/categories.component';
import { ShopComponent } from './shop/shop.component';
import { CollectionsMainComponent } from './shop/components/main/collections-main.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './shop/components/product-page/product-page.component';
import { CartComponent } from './shop/components/cart/cart.component';
import { SummerSaleComponent } from './pages/summer-sale/summer-sale.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './shop/components/search/search.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'summer-sale', component: SummerSaleComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
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
        path: 'cart',
        component: CartComponent,
      },
      {
        path: ':category',
        component: CollectionsCategoriesComponent,
      },
      {
        path: 'search/:query',
        component: SearchResultsComponent,
      },
      {
        path: ':category/:id',
        component: ProductPageComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

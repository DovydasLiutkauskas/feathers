import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageHeroComponent } from './pages/homepage/hero/hero.component';
import { HomepageShowcaseComponent } from './pages/homepage/showcase/showcase.component';
import { HomepageCollectionPreviewComponent } from './pages/homepage/collection-preview/collection-preview.component';
import { HomepageSaleComponent } from './pages/homepage/sale/sale.component';
import { HomepageEmailComponent } from './pages/homepage/email/email.component';
import { ArrowComponent } from './core/arrow/arrow.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CollectionsMainComponent } from './pages/shop/components/main/collections-main.component';
import { CollectionsCategoriesComponent } from './pages/shop/components/categories/categories.component';
import { PromoSectionComponent } from './pages/shop/components/shared/promo-section/promo-section.component';
import PageNamePipe from './pages/shop/pipes/page-name.pipe';
import { CategoriesListComponent } from './pages/shop/components/shared/categories-list/categories-list.component';
import { ProductPageComponent } from './pages/shop/components/product-page/product-page.component';
import { ProductInfoSectionComponent } from './pages/shop/components/product-page/product-info-section/product-info-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    HomepageHeroComponent,
    HomepageShowcaseComponent,
    HomepageCollectionPreviewComponent,
    HomepageSaleComponent,
    HomepageEmailComponent,
    ArrowComponent,
    ShopComponent,
    CollectionsMainComponent,
    CollectionsCategoriesComponent,
    PromoSectionComponent,
    PageNamePipe,
    CategoriesListComponent,
    ProductPageComponent,
    ProductInfoSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

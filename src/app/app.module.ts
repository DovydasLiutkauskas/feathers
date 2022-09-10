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
import { CollectionsComponent } from './pages/collections/collections.component';
import { CollectionsMainComponent } from './pages/collections/components/main/collections-main.component';
import { CollectionsCategoriesComponent } from './pages/collections/components/categories/categories.component';
import { PromoSectionComponent } from './pages/collections/components/promo-section/promo-section/promo-section.component';

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
    CollectionsComponent,
    CollectionsMainComponent,
    CollectionsCategoriesComponent,
    PromoSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

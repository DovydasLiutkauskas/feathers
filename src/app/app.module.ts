import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ShopComponent } from './shop/shop.component';
import { CollectionsMainComponent } from './shop/components/main/collections-main.component';
import { CollectionsCategoriesComponent } from './shop/components/categories/categories.component';
import { PromoSectionComponent } from './shop/components/shared/promo-section/promo-section.component';
import PageNamePipe from './shop/pipes/page-name.pipe';
import { CategoriesListComponent } from './shop/components/shared/categories-list/categories-list.component';
import { ProductPageComponent } from './shop/components/product-page/product-page.component';
import { ProductInfoSectionComponent } from './shop/components/product-page/product-info-section/product-info-section.component';
import { RelatedProductsComponent } from './shop/components/product-page/related-products/related-products.component';
import { AddToCartModalComponent } from './shop/components/product-page/addToCart-modal/add-to-cart-modal.component';
import { BreadcrumbsComponent } from './shop/components/shared/breadcrumbs/breadcrumbs.component';
import { CartComponent } from './shop/components/cart/cart.component';
import { CartPopupComponent } from './core/header/cart-popup/cart-popup.component';
import ClickOutsideDirective from './core/header/cart-popup/clicked-outside.directive';
import { SalesPercentageComponent } from './shared/components/sales-percentage/sales-percentage.component';
import { ProductDisplayComponent } from './shared/components/product-display/product-display.component';
import { SummerSaleComponent } from './pages/summer-sale/summer-sale.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartProductComponent } from './shop/components/cart/cart-product/cart-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './shop/components/search/search.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
import { ShippingFormComponent } from './shop/components/checkout/shipping-form/shipping-form.component';
import { PaymentFormComponent } from './shop/components/checkout/payment-form/payment-form.component';
import { OrderSummaryComponent } from './shop/components/checkout/order-summary/order-summary.component';

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
    RelatedProductsComponent,
    AddToCartModalComponent,
    BreadcrumbsComponent,
    CartComponent,
    CartPopupComponent,
    ClickOutsideDirective,
    SalesPercentageComponent,
    ProductDisplayComponent,
    SummerSaleComponent,
    AboutUsComponent,
    PageHeaderComponent,
    ContactComponent,
    CartProductComponent,
    NotFoundComponent,
    SearchResultsComponent,
    CheckoutComponent,
    ShippingFormComponent,
    PaymentFormComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

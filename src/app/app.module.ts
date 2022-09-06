import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeroComponent } from './pages/homepage/hero/hero.component';
import { ShowcaseComponent } from './pages/homepage/showcase/showcase.component';
import { CollectionPreviewComponent } from './pages/homepage/collection-preview/collection-preview.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomepageComponent, HeroComponent, ShowcaseComponent, CollectionPreviewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

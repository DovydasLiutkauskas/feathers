import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsCategoriesComponent } from './pages/collections/categories/categories.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CollectionsMainComponent } from './pages/collections/main/collections-main.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'collections',
    component: CollectionsComponent,
    children: [
      { path: '', pathMatch: 'full', component: CollectionsMainComponent },
      {
        path: ':category',
        pathMatch: 'full',
        component: CollectionsCategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

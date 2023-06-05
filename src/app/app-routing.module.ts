import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// common
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

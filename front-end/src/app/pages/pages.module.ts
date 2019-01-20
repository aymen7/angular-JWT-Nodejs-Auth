import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule, PagesRoutedComponents } from './pages-routing.module';

@NgModule({
  declarations: [
    [...PagesRoutedComponents],
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }

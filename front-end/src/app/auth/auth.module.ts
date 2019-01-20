import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, AuthRoutedComponents } from './auth-routing.module';

@NgModule({
  declarations: [
    [...AuthRoutedComponents],
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

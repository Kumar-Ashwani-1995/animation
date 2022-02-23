import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { SharedModuleModule } from '../shared/shared-module.module';


@NgModule({
  declarations: [
    LazyLoadedComponent
  ],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
    SharedModuleModule
  ]
})
export class LazyLoadedModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentChildComunicationComponent } from './parent-child-comunication/parent-child-comunication.component';
import { ChildComponentComponent } from './parent-child-comunication/child-component/child-component.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { Component1Component } from './component-communication/component1/component1.component';
import { Component2Component } from './component-communication/component2/component2.component';
import { TransferService } from './component-communication/transfer.service';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { DemoComponentComponent } from './life-cycle-hooks/demo-component/demo-component.component';
import { ProjectDirective } from './life-cycle-hooks/project.directive';
import { ContectProjectionComponent } from './life-cycle-hooks/demo-component/contect-projection/contect-projection.component';
import { DirectivesComponent } from './directives/directives.component';
import { RedblackDirective } from './redblack.directive';
import { PipesComponent } from './pipes/pipes.component';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { SharedModuleModule } from './shared/shared-module.module';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ParentChildComunicationComponent,
    ChildComponentComponent,
    ComponentCommunicationComponent,
    Component1Component,
    Component2Component,
    LifeCycleHooksComponent,
    DemoComponentComponent,
    ProjectDirective,
    ContectProjectionComponent,
    DirectivesComponent,
    RedblackDirective,
    PipesComponent,
    CurrencyConverterPipe,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }

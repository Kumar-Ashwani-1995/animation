import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentChildComunicationComponent } from './parent-child-comunication/parent-child-comunication.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path:"",redirectTo:"db",pathMatch:"full"},
  {path:"db",component:DataBindingComponent},
  {path:"PCcommunication",component:ParentChildComunicationComponent},
  {path:"CompCommunication",component:ComponentCommunicationComponent},
  {path:"LifeCycleHooks",component:LifeCycleHooksComponent},
  {path:"Directives",component:DirectivesComponent},
  {path:"Pipes",component:PipesComponent},
  {path:"templateDriven",component:TemplateDrivenComponent},
  {path:"reactiveForm",component:ReactiveFormComponent},
  { path: 'lazy', loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule) },
  {path:"**",redirectTo:"db",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

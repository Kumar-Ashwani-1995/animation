import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentChildComunicationComponent } from './parent-child-comunication/parent-child-comunication.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:"db",component:DataBindingComponent},
  {path:"PCcommunication",component:ParentChildComunicationComponent},
  {path:"CompCommunication",component:ComponentCommunicationComponent},
  {path:"LifeCycleHooks",component:LifeCycleHooksComponent},
  {path:"Directives",component:DirectivesComponent},
  {path:"Pipes",component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

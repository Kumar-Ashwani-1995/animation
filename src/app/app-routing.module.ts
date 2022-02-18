import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentChildComunicationComponent } from './parent-child-comunication/parent-child-comunication.component';

const routes: Routes = [
  {path:"db",component:DataBindingComponent},
  {path:"PCcommunication",component:ParentChildComunicationComponent},
  {path:"CompCommunication",component:ComponentCommunicationComponent},
  {path:"LifeCycleHooks",component:LifeCycleHooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

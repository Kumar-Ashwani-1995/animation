import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LoginGuard } from './login.guard';
import { NgrxLearningComponent } from './ngrx-learning/ngrx-learning.component';
import { ParentChildComunicationComponent } from './parent-child-comunication/parent-child-comunication.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GuardedComponent } from './routing-component/guarded/guarded.component';
import { RouterChildComponent } from './routing-component/router-child/router-child.component';
import { RouterChild2Component } from './routing-component/router-child2/router-child2.component';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  // {path:"",redirectTo:"db",pathMatch:"full"},
  {path:"",component:DataBindingComponent},
  {path:"PCcommunication",component:ParentChildComunicationComponent},
  {path:"CompCommunication",component:ComponentCommunicationComponent},
  {path:"LifeCycleHooks",component:LifeCycleHooksComponent},
  {path:"Directives",component:DirectivesComponent},
  {path:"Pipes",component:PipesComponent},
  {path:"templateDriven",component:TemplateDrivenComponent},
  {path:"reactiveForm",component:ReactiveFormComponent},
  {path:"rxjs",component:RxjsOperatorsComponent},
  {path:"httpReq",component:HttpRequestComponent},
  {path:"ngrx",component:NgrxLearningComponent},
  {path:"route",component:RoutingComponentComponent,
    children:[
      
      { path:"child/:id",component:RouterChildComponent},
      { path:"child2",component:RouterChild2Component},
      { path:"guard",component:GuardedComponent,canActivate:[LoginGuard]}
    ]
},
  { path: 'lazy', loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule) },
  {path:"**",redirectTo:"db",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

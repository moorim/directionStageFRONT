import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { StageComponent } from './stage/stage.component';
import { EditStageComponent } from './edit-stage/edit-stage.component'
import { AddStageComponent} from './add-stage/add-stage.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path : 'login' , component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'editStage/:id', component:EditStageComponent},
  {path:'addStage', component:AddStageComponent},
  {path:'stages' ,component:StageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { WorkComponent } from './pages/work/work.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(this.routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

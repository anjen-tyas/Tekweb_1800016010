import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { KelasTeoriComponent } from './pages/kelas-teori/kelas-teori.component';
import { PraktikumComponent } from './pages/praktikum/praktikum.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'kelas-teori',
    component: KelasTeoriComponent
  },

  {
    path:'praktikum',
    component: PraktikumComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }

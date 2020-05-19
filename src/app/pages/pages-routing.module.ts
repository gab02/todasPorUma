
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [

 { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
 { path: 'more', loadChildren: './more/more.module#MorePageModule' },
 { path: 'angel', loadChildren: './angel/angel.module#AngelPageModule' },
 { path: 'home', loadChildren: './home/home.module#HomePageModule' }
];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }

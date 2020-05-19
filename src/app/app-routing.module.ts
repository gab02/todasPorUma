import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'pages/home',  pathMatch: 'full' },
  
  { 
    path: 'pages', 
    loadChildren: './pages/pages-routing.module#PagesRoutingModule'
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from '../views/home-view/home-view.component';
import { LoginViewComponent } from '../views/login-view/login-view.component';

import { endpoints } from '../utils/endpoints';

const routes: Routes = [
  { path: endpoints.home, component: HomeViewComponent },
  { path: endpoints.login, component: LoginViewComponent },
  { path: '**', redirectTo: endpoints.home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

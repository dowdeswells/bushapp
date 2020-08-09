import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnzComponent } from './bankapp/anz/anz.component';
import { WestpacComponent } from './bankapp/westpac/westpac.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'bank-anz', // child route path
        component: AnzComponent, // child route component that the router renders
      },
      {
        path: 'bank-westpac',
        component: WestpacComponent, // another child route component that the router renders
      },
    ],
  },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

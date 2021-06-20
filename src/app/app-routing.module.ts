import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./pages/forms-list/forms-list.module').then((m) => m.FormsListModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'circulars',
        loadChildren: () =>
          import('./pages/circulars/circulars.module').then((m) => m.CircularsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./detailed/detailed.module').then( m => m.DetailedPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  // },
  // {
  //   path: 'detailed',
  //   loadChildren: () => import('./detailed/detailed.module').then( m => m.DetailedPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

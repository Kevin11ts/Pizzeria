import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'gryffinder',
    loadChildren: () => import('./gryffinder/gryffinder.module').then( m => m.GryffinderPageModule)
  },
  {
    path: 'slytherin',
    loadChildren: () => import('./slytherin/slytherin.module').then( m => m.SlytherinPageModule)
  },
  {
    path: 'ravenclaw',
    loadChildren: () => import('./ravenclaw/ravenclaw.module').then( m => m.RavenclawPageModule)
  },
  {
    path: 'hafflepuff',
    loadChildren: () => import('./hafflepuff/hafflepuff.module').then( m => m.HafflepuffPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

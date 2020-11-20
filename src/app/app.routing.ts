import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RelationsAndGraphsComponent } from './components/relations-and-graphs/relations-and-graphs.component';
import { NetworkGraphComponentComponent } from './components/network-graph-component/network-graph-component.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'relations',
    pathMatch: 'full',
  },
  {
    path: 'relations-and-grafos',
    component: NetworkGraphComponentComponent
  },
  {
    path: 'relations',
    component: RelationsAndGraphsComponent
  },
  {
    path: '**',
    redirectTo: 'relations'
  }
]

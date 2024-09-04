import { Routes } from '@angular/router';
import { BlackLayoutComponent } from './layout/black-layout/black-layout.component';

export const routes: Routes = [
  {path:'', component: BlackLayoutComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'}
  ]}
];

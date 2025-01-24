import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OrderpageComponent } from './pages/orderpage/orderpage.component';
import { GuardpageComponent } from './pages/guardpage/guardpage.component';
import { WeekguardpageComponent } from './pages/weekguardpage/weekguardpage.component';
import { PafpageComponent } from './pages/pafpage/pafpage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'ordres',
    component: OrderpageComponent
  },
  {
    path: 'garde',
    component: GuardpageComponent
  },
  {
    path: 'garde/semaine',
    component: WeekguardpageComponent
  },
  {
    path: 'garde/paf',
    component: PafpageComponent
  },
];

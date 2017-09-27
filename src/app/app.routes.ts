import { Routes, RouterModule} from '@angular/router';

import { InputDashboardComponent } from './components/input-dashboard/input-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InputDashboardComponent
  },
];

export const Approutes = RouterModule.forRoot(routes);

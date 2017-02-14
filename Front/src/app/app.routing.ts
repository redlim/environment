import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import {MainComponent} from './main/main.component';

const appRoutes = [
  { path :'', component: MainComponent},
  { path: 'blog', component: BlogComponent  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(appRoutes);

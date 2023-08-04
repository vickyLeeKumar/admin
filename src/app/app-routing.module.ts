import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AppsComponent } from './apps/apps.component';
import { InboxComponent } from './inbox/inbox.component';
import { NewReleaseComponent } from './new-release/new-release.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'widgets', component: WidgetsComponent
    },
    {
        path: 'apps', component: AppsComponent
    },
    {
        path: 'inbox', component: InboxComponent
    },
    {
        path: 'new-release', component: NewReleaseComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
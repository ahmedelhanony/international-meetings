import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sandbox',
    loadChildren: () => import(`./sandbox/sandbox.module`).then(m => m.SandboxModule)
  },
  {
    path: 'all-events',
    loadChildren: () => import(`./all-events/all-events.module`).then(m => m.AllEventsModule)
  },
  {
    path: 'groups',
    loadChildren: () => import(`./groups/groups.module`).then(m => m.GroupsModule)
  },
  {
    path: 'organizations',
    loadChildren: () => import(`./organizations/organizations.module`).then(m => m.OrganizationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

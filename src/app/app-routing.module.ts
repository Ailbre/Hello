import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloMarsComponent } from './hello-mars/hello-mars.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'HelloMars', component: HelloMarsComponent},
  {path: 'HelloWorld', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

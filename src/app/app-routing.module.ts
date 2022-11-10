import { ResultComponent } from './components/result/result.component';
import { StartComponent } from './components/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: StartComponent
  },
  {
    path: 'result/:data', component: ResultComponent
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

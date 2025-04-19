import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StagesIngComponent } from './stages-ing/stages-ing.component';
import { AddStageIngComponent } from './add-stage-ing/add-stage-ing.component';
import { DetailStageComponent } from './detail-stage/detail-stage.component';

const r: Routes = [
  { path: '', redirectTo:'home' ,pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ajouterStage', component:AddStageIngComponent  },
  { path: 'ConsulterStage', component: StagesIngComponent },
  { path: 'DetailStage/:id', component: DetailStageComponent },
  { path: '**', component:NotFoundComponent },


  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(r)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }

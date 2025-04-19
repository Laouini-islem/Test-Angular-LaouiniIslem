import { Component } from '@angular/core';
import { StageService } from '../service/stage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/core/models/Stage';

@Component({
  selector: 'app-detail-stage',
  templateUrl: './detail-stage.component.html',
  styleUrls: ['./detail-stage.component.css']
})
export class DetailStageComponent {
  getlistStages(): any {
    return this.listeStages;
  }
  id :any

  listeStages:Stage[]=[]
  constructor(private stageService : StageService,private activated_route : ActivatedRoute){}
  ngOnInit(): void {

    this.id=this.activated_route.snapshot.params['id']

    this.stageService.getStage().subscribe((data)=> {
  
      this.listeStages=data
    })
  }
  deleteStage(){
    this.stageService.deleteResidence(this.id).subscribe(()=>{
      
      this.ngOnInit()
     })

  }
    


}



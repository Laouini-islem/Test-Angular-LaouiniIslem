import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/core/models/Stage';
import { StageService } from '../service/stage.service';

@Component({
  selector: 'app-stages-ing',
  templateUrl: './stages-ing.component.html',
  styleUrls: ['./stages-ing.component.css']
})
export class StagesIngComponent  implements OnInit{
  
  deleteStage(id:any){
    this.stageService.deleteResidence(id).subscribe(()=>{
      
      this.ngOnInit()
     })

  }
listeStages:Stage[]=[]
getlistStages(): any {
  return this.listeStages;
}


constructor (private stageService:StageService) {
}

ngOnInit(): void {
  this.stageService.getStage().subscribe((data)=> {

    this.listeStages=data
  })
}

/* searchbyname(){
  return this.listeServiceResidence.filter(r=>r.name.toLowerCase()
  .includes(this.searchname.toLowerCase()) )
} */

}

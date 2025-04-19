import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StageService } from 'src/app/service/stage.service';

@Component({
  selector: 'app-add-stage-ing',
  templateUrl: './add-stage-ing.component.html',
  styleUrls: ['./add-stage-ing.component.css']
})
export class AddStageIngComponent   implements OnInit {

    constructor(private stageService : StageService ,private router:Router){}
    
    formadd!: FormGroup
    ngOnInit(): void {
        this.formadd=new FormGroup({
          titre: new FormControl('' ,[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
          description: new FormControl('' ,[Validators.required,Validators.minLength(3)]),
          entreprise: new FormControl('' ,Validators.required),
          disponible : new FormControl(true,Validators.required),
          nbrInteresse : new FormControl(0,Validators.required),
        })
    }
  
    get id(){return this.formadd.get('id')}
    addStage(){
  
      this.stageService.addStage(this.formadd.value).subscribe(()=>{console.log("added ! ")})
      this.router.navigate(['/ConsulterStage'])
    }
  
}

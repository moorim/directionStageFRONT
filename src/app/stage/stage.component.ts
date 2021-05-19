import { Component, OnInit } from '@angular/core';
import { Stage } from '../stage';
import {StageService} from '../stage.service'
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
 
  constructor(private stageService :StageService) { }
  stages: Stage[] = [];
  ngOnInit(): void {
    this.getStage();
  }
  getStage(): void {
    this.stageService.getStage().subscribe(stages =>{
      this.stages = stages;
      stages.forEach(stage =>console.log(stage.id_stage))
    });
}
delete(stage: Stage): void {
  this.stages= this.stages.filter(h => h !== stage);
  this.stageService.deleteStage(stage.id_stage).subscribe();
}
}

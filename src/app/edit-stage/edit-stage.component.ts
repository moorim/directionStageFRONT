import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {StageService} from '../stage.service'
import { Stage } from '../stage';
@Component({
  selector: 'app-edit-stage',
  templateUrl: './edit-stage.component.html',
  styleUrls: ['./edit-stage.component.css']
})
export class EditStageComponent implements OnInit {
  stage : Stage = {id_stage:0,titre:"",date_debut:new Date(),date_fin:new Date(),domaine:"",
  encadrant:{id :0,
    nom:"",
    prenom:"",
    email:"",
    tel:0,
    post:"",
    societe:{ rais_soc:0,
      adresse:"",
      libelle:"",
      domaine:"",
      type:"",}
    }
  };

  constructor( private route :ActivatedRoute,
    private stageService:StageService,
    private location:Location) { }

  ngOnInit(): void {
    this.getstage();
  }
  getstage():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stageService.getOne(id).subscribe(stage=> this.stage = stage);
  }
  goBack(): void {
    this.location.back();
  }
  save():void {
    this.stageService.updateStage(this.stage).subscribe(()=>this.goBack());
  }

}

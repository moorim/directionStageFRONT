import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Stage } from '../stage'
import { StageService } from '../stage.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {
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
  constructor(private stageService : StageService,private location:Location) { }

  ngOnInit(): void {
  }
  save(){
    this.stageService.saveStage(this.stage)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
  }
  goBack(): void {
    this.location.back();
  }


}

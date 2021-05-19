import { Component, OnInit } from '@angular/core';
import { StageService} from "../stage.service"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbStage:number=0;
  constructor(private stageService:StageService) { }

  ngOnInit(): void {
    this.stageService.countStages().subscribe(nb => this.nbStage=nb );
  }
  toggleSidebar()
  {
       document.getElementById("wrapper")?.classList.toggle('toggled');
  }

}

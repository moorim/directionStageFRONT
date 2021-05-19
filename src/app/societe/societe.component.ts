import { SocieteService } from './../societe.service';
import { Societe } from './../societe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {
  societes: Societe[] = [];
  constructor(private SocieteService: SocieteService) { }

  ngOnInit(): void {
    this.getSociete();
  }
  getSociete(): void {
    this.SocieteService.getSociete().subscribe(societes =>{
      this.societes = societes;
      societes.forEach(societe=>console.log(societe.rais_soc))
    });
    
  }
}
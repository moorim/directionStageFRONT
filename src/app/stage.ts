import { Encadrant } from './encadrant';

export interface Stage {
    id_stage:number,
    titre:string,
    date_debut:Date,
    date_fin:Date,
    domaine:string,
    encadrant:Encadrant,  
 }
 
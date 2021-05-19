import { Societe } from './societe';

export interface Encadrant {
   id :number,
   nom:string,
   prenom:string,
   email:string
   tel:number,
   post:string,
   societe:Societe
   
}
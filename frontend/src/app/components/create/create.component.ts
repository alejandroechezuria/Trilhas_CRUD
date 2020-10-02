import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Info } from '../../models/info';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  infoArray : Info [] = [
    {id: 1 , name: "pedra da gavea", region:"gavea" },
    
    {id: 2 , name: "pao de açucar", region:"botafogo" },
    
    {id: 3 , name: "pedra", region:"vidigal" }
  ] ;

  selectedInfo: Info = new Info();
 
  
  
  constructor () { }

  
  ngOnInit(): void {
  }
  openForEdit(info: Info){


    this.selectedInfo= info ;
  }

   addOrEdit(){
     if(this.selectedInfo.id ==0)
  this.selectedInfo.id = this.infoArray.length+1;
  this.infoArray.push(this.selectedInfo);

  this.selectedInfo = new Info();
   }

   Delete(){
     if(confirm('Are you  sure you want to DELETE  IT??')){

     
    this.infoArray = this.infoArray.filter(x =>x !== this.selectedInfo);
    this.selectedInfo = new Info() ;
     } 
   }


}

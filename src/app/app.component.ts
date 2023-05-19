import { Component, OnInit } from '@angular/core';
import { AutoService } from './auto.service.service';
import { Router } from '@angular/router';
import { userdata } from './userdata';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Search Engine';
  posts!: any;
  username: any;
  searchResult:undefined|userdata[];
  userresult!: userdata[];
  constructor(private route: Router,private service: AutoService) {}
 dataSource: any;
 empty: boolean = false;
  ngOnInit(){

  }

  nameValue(name: any) {
    this.username = name;
    console.log(this.username);}

    searchUser(query:KeyboardEvent){
      if(query){
        const element = query.target as HTMLInputElement;
        this.service.searchUser(element.value).subscribe((result)=>{
         
          if(result.length>5){
            result.length=length
          }
          this.searchResult=result;
          //this.dataSource = new UserTableDataSource();
        //  this.dataSource = new MatTableDataSource<userdata>(this.searchResult)
        }
        )        
      }
    }

    hideSearch(){
      this.searchResult=undefined
    }
    redirectToDetails(id:number){
      this.route.navigate(['/details/'+id])
    }
    submitSearch(val:string){
      console.warn(val)
  this.service.searchUser(val).subscribe((result)=>{
         if(result.length === 0){
          this.empty=true;
         }
         else{
          this.empty  = false;
         }
    if(result.length>21){
      result.length=length
    }
    this.searchResult=result;
    }
    
  )}
  }

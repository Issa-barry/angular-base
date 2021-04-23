import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datas: Users[] = [];
  // selectedProduct: Users = { Id:0,name: "",pwd:"string",email:" "}
  constructor(private dataService: ApiService) {}


  ngOnInit(): void {
    this.dataService._getAllUser().subscribe((datas: Users[]) =>{
      this.datas = datas;
      console.log(this.datas);
    },error => console.error(error));
  }



}

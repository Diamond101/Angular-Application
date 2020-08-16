import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-show-sbu',
  templateUrl: './show-sbu.component.html',
  styleUrls: ['./show-sbu.component.css']
})
export class ShowSBUComponent implements OnInit {

  constructor() { }
listData : MatTableDataSource<any>
displayedColumns : string [] =['Options','SBU_Code','SBU_Name',
'Telephone','SBU_Email']
  ngOnInit(): void {
  }

}

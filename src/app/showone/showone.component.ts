import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentservice } from '../service/service.compnent';

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css'],
  providers: [studentservice]
})
export class ShowoneComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public _studentbyiddata: studentservice) { }
  studentID: string | null = "";
  studentbyid: any[] = [];
  ngOnInit(): void {
    this.studentID = this._route.snapshot.paramMap.get('id');
    this.studentbyid = this._studentbyiddata.getstdbyid(this.studentID);
  }



}

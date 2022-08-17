import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empdata } from '../service/empservice.component';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css'],
  providers: [empdata]
})
export class ViewemployeeComponent implements OnInit {

  constructor(public _data: empdata, public _route: ActivatedRoute) { }

  empid: string | null = "";
  empdata: any[] = [];

  ngOnInit(): void {
    this.empid=this._route.snapshot.paramMap.get('id');
    this.empdata = this._data.getempbyid(this.empid);
  }

}

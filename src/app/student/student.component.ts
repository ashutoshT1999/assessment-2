import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from '../interface/interfaceperson.component';
import { studentservice } from '../service/service.compnent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[studentservice]
})
export class StudentComponent implements OnInit {

  constructor(private _router: Router, private _servicedata: studentservice) {

  }

  displayedColumns: string[] = ['Studentid', 'firstname', "class", "rollno", "math", "english", "hindi", "total"];
  dataSource = this._servicedata.getfulldata();

  ngOnInit(): void {
  }

  routerclick(id: any) {
    this._router.navigate(["/showone", id.Studentid]);
  }

}

import { Component, OnInit } from '@angular/core';
import { person } from '../interface/interfaceperson.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: any[] = [
    { Studentid: 1, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 2, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 3, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 4, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 5, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 6, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 7, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 8, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 9, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
    { Studentid: 10, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 }
  ];
  displayedColumns: string[] = ['Studentid', 'firstname',"class", "rollno", "math", "english", "hindi"];
  dataSource = this.student;
  constructor() { }

  ngOnInit(): void {
  }

}

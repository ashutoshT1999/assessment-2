import { Injectable } from "@angular/core";

@Injectable()
export class studentservice {
    student: any[] = [
        { Studentid: 1, firstname: "ashu", middlename: "gg", lastname: "tiwari", class: "X", rollno: 23, math: 20, english: 50, hindi: 70 },
        { Studentid: 2, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
        { Studentid: 3, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 20, hindi: 20 },
        { Studentid: 4, firstname: "ashu", middlename: "gg", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
        { Studentid: 5, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
        { Studentid: 6, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 20, hindi: 70 },
        { Studentid: 7, firstname: "ashu", middlename: "gg", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
        { Studentid: 8, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 70 },
        { Studentid: 9, firstname: "ashu", middlename: "", lastname: "tiwari", class: "X", rollno: 23, math: 20, english: 50, hindi: 70 },
        { Studentid: 10, firstname: "ashu", middlename: "gg", lastname: "tiwari", class: "X", rollno: 23, math: 70, english: 50, hindi: 20 }
    ];


    getstdbyid(id:string|null){
     
     return this.student.filter(x=>x.Studentid == id);

    }
    getfulldata(){
        return this.student;
    }
}





import { Component, OnInit } from '@angular/core';
import { person } from '../interface/interfaceperson.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  student:person[]=[
    {fname:"ashu",mname:"",lname:"tiwari",dep:"btech",gender:"male",dob:"20/2/2000",address:"kanpur",pincode:"208012"}
  ];
  constructor() { }
   
 
  ngOnInit(): void {
  }

}

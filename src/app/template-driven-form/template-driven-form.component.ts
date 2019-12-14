import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('loginForm',{static:true}) myForm : NgForm

  firstName
  lastName
  contact
  email
  city

  users:any = []

  constructor(public myService : DataService) { }

  ngOnInit() {

    
  }

  onSubmit(formValue:NgForm){
    console.log(formValue)
  }

  onSave(){
    console.log(this.myForm)
  }

  getData(){
    this.myService.getEmployees().subscribe(response => {
      console.log("response", response)
      this.users = response
      console.log("Users", this.users)
    })
  }

}

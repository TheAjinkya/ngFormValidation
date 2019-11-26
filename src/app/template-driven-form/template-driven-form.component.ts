import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue:NgForm){
    console.log(formValue)
  }

  onSave(){
    console.log(this.myForm)
  }

}

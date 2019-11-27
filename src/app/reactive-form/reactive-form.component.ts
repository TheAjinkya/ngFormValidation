import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm:FormGroup
  
  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'firstName' : new FormControl(null, Validators.required),
      'lastName' : new FormControl(null, Validators.required),
      'contact' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, Validators.required),
      'city' : new FormControl(null, Validators.required),
    })
  }

  onSave(){
    console.log(this.loginForm)
  }

}

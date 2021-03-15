import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, } from '@angular/forms'
@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {

  constructor() { }
  quespaper = new FormGroup({
    programme: new FormControl(''),
    course: new FormControl(''),
    semester: new FormControl(''),
  });
  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.quespaper.value)
  }
}

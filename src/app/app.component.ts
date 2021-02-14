import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Noted';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  // login(){
   
  //   this.router.navigate(['signin']);
  // }

}

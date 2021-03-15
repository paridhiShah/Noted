import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adbms',
  templateUrl: './adbms.component.html',
  styleUrls: ['./adbms.component.css']
})
export class AdbmsComponent implements OnInit {
  window: any;

  constructor() { }

  ngOnInit(): void {
  }
  onEdit(){
    window.scrollTo(0, 0);
  }
}

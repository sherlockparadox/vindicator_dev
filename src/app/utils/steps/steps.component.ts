import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.sass']
})
export class StepsComponent implements OnInit {

  @Input() list: any;
  @Input() style: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  parentList = [
    {
      segmentCall: 'is-active',
      icon: 'fa-user-friends',
      title: 'Get Invited',
      markerClass: ''
    },
    {
      segmentCall: '',
      icon: 'fa-user',
      title: 'Create Profile',
      markerClass: ''
    },
    {
      segmentCall: 'has-gaps',
      icon: 'fa-id-card',
      title: 'Complete Verification',
      markerClass: ''
    },
    {
      segmentCall: '',
      icon: 'fa-check',
      title: 'Confirmation',
      markerClass: 'is-hollow'
    },
    {
      segmentCall: '',
      icon: 'fa-check',
      title: 'Confirmation',
      markerClass: 'is-hollow'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

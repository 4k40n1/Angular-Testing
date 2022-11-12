import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-alert',
  templateUrl: 'sound-alert.component.html',
  styles: [
  ]
})
export class SoundAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PlayAlert() {
    const audio = new Audio('assets/sounds/Modern13.mp3')
    audio.play()
  }

}

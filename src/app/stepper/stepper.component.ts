import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() step;
  constructor() { }

  ngOnInit(): void {
  }

}

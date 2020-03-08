import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  @Output() stepEmit = new EventEmitter<number>(true);
  constructor() { }

  ngOnInit(): void { this.stepEmit.emit(3);
  }

}

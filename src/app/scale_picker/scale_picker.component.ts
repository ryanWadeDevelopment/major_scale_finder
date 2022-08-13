import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scale-picker',
  templateUrl: './scale_picker.component.html',
  styleUrls: ['./scale_picker.component.css'],
})
export class ScalePickerComponent {
  notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  types = ['\u266E', '\u266F', '\u266D'];
  scaleTypes = ['Major', 'Minor'];
  currentNoteValue: string = 'C';
  currentTypeValue = '\u266E';
  currentScaleValue = 'Major';

  @Output() childToParent = new EventEmitter<string>();
  sendToParent(note: string) {
    this.childToParent.emit(note);
  }
}

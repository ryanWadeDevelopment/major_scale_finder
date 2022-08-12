import { Component } from '@angular/core';

@Component({
  selector: 'app-scale-picker',
  templateUrl: './scale_picker.component.html',
  styleUrls: ['./scale_picker.component.css'],
})
export class ScalePickerComponent {
  notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  types = ['Whole', 'Sharp', 'Flat'];
  currentNoteValue = '';
  currentTypeValue = '';
}

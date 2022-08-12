import { Component } from '@angular/core';

@Component({
  selector: 'app-scale-picker',
  templateUrl: './scale_picker.component.html',
  styleUrls: ['./scale_picker.component.css'],
})
export class ScalePickerComponent {
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
}
